import { ButtonNav } from "./ButtonNav";

export const Appbar = () => {
    return (
        <div className="flex justify-end items-center p-1 space-x-2 bg-black pr-40">
            <ButtonNav label={"About"} />
            <ButtonNav label={"Projects"} />
            <ButtonNav label={"Resume"} />
            <ButtonNav label={"Contact"} />
        </div>
    );
};
