import { Calendar, Tag, X } from "lucide-react";
import Button from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

const CreateActivityModal = ({
  closeCreateActivityModal,
}: CreateActivityModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        {/* email input */}
        <form className="space-y-3">
          <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Qual a ativdade"
              className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e Horário"
                className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
              />
            </div>
          </div>

          <Button variant="primary" size="full" type="submit">
            Salvar ativdade
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivityModal;
