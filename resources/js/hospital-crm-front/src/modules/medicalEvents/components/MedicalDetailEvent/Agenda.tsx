import React from "react";
import stylesMe from "../../style/index.module.css";
import { AgendaProps } from "../../store";

const Agenda: React.FC<AgendaProps> = ({ medicalEventAgenda }) => {
    return (
        <div className="row g-0">
            <div className="col-lg-12 ps-2 pb-2 pe-2">
                <h3 className="">Conference Agenda</h3>
                {medicalEventAgenda && medicalEventAgenda.map((medicalEvent) => (
                    <div key={medicalEvent.id} className={`${stylesMe.agenda_item}`}>
                        <h3>{medicalEvent.title}</h3>
                        <p>{medicalEvent.time}</p>
                        <p>{medicalEvent.session}</p>
                        <p>{medicalEvent.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Agenda;
