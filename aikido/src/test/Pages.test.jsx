import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./utils";
import Esprit from "../pages/Esprit";
import MentionsLegales from "../pages/MentionsLegales";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";

describe("Esprit", () => {
  it("affiche le titre de la page", () => {
    renderWithRouter(<Esprit />);
    expect(screen.getByText("L'ESPRIT DE LA VOIE")).toBeInTheDocument();
  });

  it("affiche la citation d'O-Sensei", () => {
    renderWithRouter(<Esprit />);
    // Plusieurs éléments contiennent "Morihei Ueshiba" — on vérifie juste la présence
    expect(screen.getAllByText(/Morihei Ueshiba/i).length).toBeGreaterThan(0);
  });

  it("affiche la section L'ART DE LA PAIX", () => {
    renderWithRouter(<Esprit />);
    expect(screen.getByText("L'ART DE LA PAIX")).toBeInTheDocument();
  });
});

describe("MentionsLegales", () => {
  it("affiche le titre", () => {
    renderWithRouter(<MentionsLegales />);
    expect(screen.getByText("MENTIONS LÉGALES")).toBeInTheDocument();
  });

  it("affiche les informations de l'éditeur", () => {
    renderWithRouter(<MentionsLegales />);
    expect(screen.getByText("Nom : Julien Sicard")).toBeInTheDocument();
    expect(screen.getByText(/Saint-Ciers-sur-Gironde/i)).toBeInTheDocument();
  });

  it("affiche la section hébergement", () => {
    renderWithRouter(<MentionsLegales />);
    expect(screen.getByText("HÉBERGEMENT")).toBeInTheDocument();
    expect(screen.getByText("Amazon Web Services, Inc.")).toBeInTheDocument();
  });
});

describe("PolitiqueConfidentialite", () => {
  it("affiche le titre", () => {
    renderWithRouter(<PolitiqueConfidentialite />);
    expect(screen.getByText("POLITIQUE DE CONFIDENTIALITÉ")).toBeInTheDocument();
  });

  it("affiche la section cookies", () => {
    renderWithRouter(<PolitiqueConfidentialite />);
    expect(screen.getByText("COOKIES")).toBeInTheDocument();
    expect(screen.getByText(/n'utilise aucun cookie/i)).toBeInTheDocument();
  });

  it("affiche les droits RGPD", () => {
    renderWithRouter(<PolitiqueConfidentialite />);
    expect(screen.getByText("VOS DROITS (RGPD)")).toBeInTheDocument();
    expect(screen.getByText(/Droit d'accès à vos données/i)).toBeInTheDocument();
  });
});
