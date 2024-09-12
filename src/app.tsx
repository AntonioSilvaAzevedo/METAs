import { Plus } from "lucide-react";
import letsStart from "./assets/lets-start.svg";
import Logo from "./assets/logo-in-orbit.svg";

export function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-8">
      <img src={Logo} alt="in-orbit logo" />
      <img src={letsStart} alt="in-orbit logo" />
      <p className="text-zinc-300 leading-relaxed text-center max-w-80">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <button
        type="button"
        className="bg-violet-500 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium tracking-tighter hover:bg-violet-600"
      >
        <Plus className="size-4" /> Cadastrar meta
      </button>
    </div>
  );
}
