import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  removeEmailsFromInvites: (emailToRemove: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

const InviteGuestsModal = ({
  closeGuestsModal,
  emailsToInvite,
  removeEmailsFromInvites,
  addNewEmailToInvite,
}: InviteGuestsModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        {/* emails invite */}
        {emailsToInvite.length !== 0 ? (
          <div className="flex flex-wrap gap-2">
            {emailsToInvite.map((email) => (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailsFromInvites(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-sm text-zinc-400">Cadastre um e-mail.</h1>
        )}

        <div className="w-full h-px bg-zinc-800" />

        {/* email input */}
        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <AtSign className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
          />

          <button
            className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
            type="submit"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InviteGuestsModal;
