import PageHeader from "@/components/PageHeader";
import { Download } from "lucide-react";

const Agenda = () => {
    return (
        <div>
            <PageHeader
                title="Agenda"
                description="Lorem fistrum fistro no puedor no puedor al ataquerl va usté muy cargadoo te voy a borrar el cerito ahorarr por la gloria de mi madre ese pedazo de pecador."
                section="program"
                buttonUrl="#"
                buttonText="download pdf"
                buttonIcon={<Download size={18} />}
                buttonVariant="blue"
            />
            <section className="w-full justify-start text-xs">
                This is the rest of the page
            </section>
        </div>
    );
};

export default Agenda;