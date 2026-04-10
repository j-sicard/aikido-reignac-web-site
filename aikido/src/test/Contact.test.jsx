import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./utils";
import Contact from "../pages/Contact";

describe("Contact", () => {
  it("affiche le titre de la page", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText("NOUS CONTACTER")).toBeInTheDocument();
  });

  it("affiche les champs du formulaire", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByLabelText(/Nom Complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Adresse E-mail de contact/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Votre Message/i)).toBeInTheDocument();
  });

  it("affiche le bouton d'envoi", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByRole("button", { name: /ENVOYER/i })).toBeInTheDocument();
  });

  it("le formulaire pointe vers Formspree", () => {
    renderWithRouter(<Contact />);
    const form = document.querySelector("form");
    expect(form).toHaveAttribute("action", expect.stringContaining("formspree.io"));
  });

  it("affiche les informations du dojo", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/33860 Reignac/i)).toBeInTheDocument();
    expect(screen.getByText(/06 75 63 90 81/i)).toBeInTheDocument();
    expect(screen.getByText(/aikidoreignac@gmail.com/i)).toBeInTheDocument();
  });
});
