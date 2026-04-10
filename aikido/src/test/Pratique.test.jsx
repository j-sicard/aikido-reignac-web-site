import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "./utils";
import Pratique from "../pages/Pratique";

describe("Pratique", () => {
  it("affiche le titre de la page", () => {
    renderWithRouter(<Pratique />);
    expect(screen.getByText("LA PRATIQUE")).toBeInTheDocument();
  });

  it("affiche la section Taijutsu", () => {
    renderWithRouter(<Pratique />);
    expect(screen.getByText("TAIJUTSU")).toBeInTheDocument();
    expect(screen.getByText(/Pratique à mains nues/i)).toBeInTheDocument();
  });

  it("affiche la section Bukiwaza", () => {
    renderWithRouter(<Pratique />);
    expect(screen.getByText("BUKIWAZA")).toBeInTheDocument();
    expect(screen.getByText(/Travail des Armes/i)).toBeInTheDocument();
  });

  it("affiche les trois boutons d'armes", () => {
    renderWithRouter(<Pratique />);
    expect(screen.getByText("Bokken")).toBeInTheDocument();
    expect(screen.getByText("Jo")).toBeInTheDocument();
    expect(screen.getByText("Tanto")).toBeInTheDocument();
  });

  it("change l'image au clic sur Jo", () => {
    renderWithRouter(<Pratique />);
    const joButton = screen.getByRole("button", { name: /Jo/i });
    fireEvent.click(joButton);
    const img = screen.getByAltText("Armes en Bois");
    expect(img.src).toContain("Jo_josette_bis");
  });

  it("change l'image au clic sur Tanto", () => {
    renderWithRouter(<Pratique />);
    const tantoButton = screen.getByRole("button", { name: /Tanto/i });
    fireEvent.click(tantoButton);
    const img = screen.getByAltText("Armes en Bois");
    expect(img.src).toContain("tanto");
  });
});
