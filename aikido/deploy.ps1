param(
  [ValidateSet("dev", "prod")]
  [string]$Env = "dev"
)

$infraPath  = Join-Path $PSScriptRoot "..\aikido-infra"
$varFile    = "env\$Env.tfvars"

Write-Host "==> Deploy vers : $Env" -ForegroundColor Cyan

# 1. Build du site
npm run build
if ($LASTEXITCODE -ne 0) { exit 1 }

# 2. Terraform apply
Push-Location $infraPath
terraform init -reconfigure
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }

terraform plan -var-file="$varFile" -out=tfplan
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }

terraform apply -auto-approve tfplan
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }

$bucketName     = terraform output -raw bucket_name
$distributionId = terraform output -raw distribution_id
$siteUrl        = terraform output -raw site_url
Pop-Location

# 3. Sync S3
aws s3 sync ./dist "s3://$bucketName" --delete
if ($LASTEXITCODE -ne 0) { exit 1 }

# 4. Invalidation CloudFront
Write-Host "==> Invalidation CloudFront ($distributionId)..." -ForegroundColor Cyan
aws cloudfront create-invalidation --distribution-id $distributionId --paths "/*"

Write-Host "==> Site disponible : $siteUrl" -ForegroundColor Green
