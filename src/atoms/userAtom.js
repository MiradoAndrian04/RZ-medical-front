import {atom} from "recoil";

const userAtom = atom({
    key: "userAtom",
    default: JSON.parse(localStorage.getItem("admin-user")),
});

export default userAtom