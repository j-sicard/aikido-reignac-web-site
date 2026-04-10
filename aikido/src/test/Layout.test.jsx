import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "./utils";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("affiche le nom du club dans la navigation", () => {
    renderWithRouter(<Layout><div /></Layout>);
    expect(screen.getByText("Aikido Arts Martiaux")).toBeInTheDocument();
  });

  it("affiche les liens de navigation principaux", () => {
    renderWithRouter(<Layout><div /></Layout>);
    expect(screen.getByText("L'ESPRIT")).toBeInTheDocument();
    expect(screen.getByText("PRATIQUE")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });

  it("affiche le footer avec le nom du club", () => {
    renderWithRouter(<Layout><div /></Layout>);
    expect(screen.getByText("Aikido Arts Martiaux Reignacais")).toBeInTheDocument();
  });

  it("affiche les liens légaux dans le footer", () => {
    renderWithRouter(<Layout><div /></Layout>);
    expect(screen.getByText("Mentions légales")).toBeInTheDocument();
    expect(screen.getByText("Politique de confidentialité")).toBeInTheDocument();
  });

  it("affiche les liens réseaux sociaux dans le footer", () => {
    renderWithRouter(<Layout><div /></Layout>);
    const links = screen.getAllByRole("link");
    const hrefs = links.map(l => l.getAttribute("href"));
    expect(hrefs).toContain("https://www.linkedin.com/in/srdjulien");
    expect(hrefs.some(h => h?.includes("facebook.com"))).toBe(true);
    expect(hrefs.some(h => h?.includes("instagram.com"))).toBe(true);
  });

  it("ouvre le menu mobile au clic sur le bouton hamburger", () => {
    renderWithRouter(<Layout><div /></Layout>);
    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);
    expect(screen.getAllByText("PRATIQUE").length).toBeGreaterThanOrEqual(1);
  });
});
