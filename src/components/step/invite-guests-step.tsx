import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void,
    emailsToInvite: string[],
    openConfirmTripModal: () => void
}

const InviteGuestsStep = ({openGuestsModal, emailsToInvite, openConfirmTripModal} : InviteGuestsStepProps) => {
    return (
        <div className="flex items-center w-full h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
                <button
                  className="flex items-center flex-1 gap-2"
                  onClick={openGuestsModal}
                >
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {
                    emailsToInvite.length === 1 ? (
                      <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                        {emailsToInvite.length} pessoa convidada.
                      </span>
                    ) :
                    emailsToInvite.length > 1 ? (
                      <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                        {emailsToInvite.length} pessoas convidadas.
                    </span>
                    ) :
                    (
                      <span className="w-full text-lg text-left bg-transparent outline-none text-zinc-400">
                        Quem estará na viagem?
                      </span>
                    )
                  }
                </button>
  
                <div className="w-px h-6 bg-zinc-800" />
  
                <button
                  className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
                  onClick={openConfirmTripModal}
                >
                  Confirmar viagem
                  <ArrowRight className="size-5" />
                </button>
              </div>
    );
}
 
export default InviteGuestsStep;