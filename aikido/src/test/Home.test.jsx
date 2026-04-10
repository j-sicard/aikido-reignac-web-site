import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./utils";
import Home from "../pages/Home";

describe("Home", () => {
  it("affiche le titre principal", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Aikido Arts Martiaux Reignacais/i)).toBeInTheDocument();
  });

  it("affiche le bouton d'essai gratuit", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/DECOUVREZ DEUX COURS D'ESSAI GRATUITS/i)).toBeInTheDocument();
  });

  it("affiche la section horaires", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/HORAIRES DES ENTRAÎNEMENTS/i)).toBeInTheDocument();
    expect(screen.getByText("Mardi")).toBeInTheDocument();
    expect(screen.getByText("Jeudi")).toBeInTheDocument();
    expect(screen.getByText("Vendredi")).toBeInTheDocument();
  });

  it("affiche la section sensei", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("NOTRE SENSEI")).toBeInTheDocument();
    expect(screen.getByText("3ème Dan UFA")).toBeInTheDocument();
  });

  it("affiche l'image hero avec le bon alt", () => {
    renderWithRouter(<Home />);
    expect(screen.getByAltText("Aikido Practice")).toBeInTheDocument();
  });

  it("affiche le lien vers la page contact", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Venir nous rencontrer/i)).toBeInTheDocument();
  });
});
