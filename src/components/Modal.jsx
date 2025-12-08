import { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
    const [areaText, setAreaText] = useState("");
    const maxLength = 300;

    if (!isOpen) return null; // don't render anything if closed
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <section className="modal-sec">
            {/* Backdrop */}
            <div className="modal-backdrop" onClick={onClose}>

                {/* Modal box */}
                <div className="modal-box" onClick={stopPropagation}>
                    <button className="x-btn" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd"
                                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>

                    <div className="modal-content">
                        <header>
                            <span className="blinker"></span>
                            <h2 id="contact-modal-title">Online</h2>
                        </header>

                        {/* Contact form */}
                        <form className="modal-form">
                        <div className="info">
                                {/*<label htmlFor="name">Name</label>*/}
                                <input id="name" name="name" type="text" placeholder="name…" required/>

                                {/*<label htmlFor="email">Email</label>*/}
                                <input id="email" name="email" type="email" placeholder="john@gmail.com" required/>
                            </div>

                            <div>
                                {/*<label htmlFor="message">Message</label>*/}
                                <textarea
                                    className={`write-msg ${areaText.length > maxLength ? "error" : ""}`}
                                    id="message" name="message"
                                    value={areaText}
                                    onChange={(e) => setAreaText(e.target.value)}
                                    placeholder="write message..."
                                    rows={8}
                                />
                                <div style={{ marginLeft: "10px", textAlign: "left", fontSize: "0.9em", color: areaText.length > maxLength ? "#ff6a63" : "gray" }}>
                                    {areaText.length}/{maxLength} characters
                                </div>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Modal;
