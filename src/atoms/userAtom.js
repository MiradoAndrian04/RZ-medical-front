import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: (() => {
    try {
      const storedUser = localStorage.getItem("admin-user");
      return storedUser ? JSON.parse(storedUser) : null; // Retourne null si aucun utilisateur n'est stocké
    } catch (error) {
      console.error(
        "Erreur lors du parsing de l'utilisateur dans localStorage",
        error
      );
      return null;
    }
  })(),
});

export default userAtom;
