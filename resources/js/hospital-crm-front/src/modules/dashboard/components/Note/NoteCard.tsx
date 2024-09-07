import React from "react";
import { format } from 'date-fns';
import styles from "../../style/index.module.css";
import promo from "../../../../assets/img/promo.jpg";
import { MedicalEvent } from "../../store";

const NoteCard: React.FC<{ newMedicalEvent: MedicalEvent }> = ({ newMedicalEvent }) => {
    return (
        <div className={`${styles.card_note} ps-2 pe-2 mt-1`}>
            <img
                src={promo}
                alt={newMedicalEvent.name}
                className={`${styles.img_event}`}
            />
            <p className={`${styles.desc_event} d-flex justify-content-between`}>
                <span>
                    Date: {format(new Date(newMedicalEvent.event_date), "yyyy-MM-dd HH:mm:ss")}
                </span>
                <span>
                    Language: {newMedicalEvent.language}
                </span>
            </p>
            <h5 className={`${styles.title_event}`}>
                Event name: {newMedicalEvent.name} <br />
                Event organizer: {newMedicalEvent.organizer}
            </h5>
        </div>
    );
}

export default NoteCard;
