import "./Modal.css";
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null; // don't render anything if closed

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <section className="modal-sec">
            {/* Backdrop */}
            <div className="modal-backdrop" onClick={onClose}>
                {/* Modal box */}
                <div className="modal-box" onClick={stopPropagation}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    <div className="modal-content">
                        <header className="modal-header">
                            <span className="blinker"></span>
                            <h2 id="contact-modal-title">Online</h2>
                        </header>
                        {/* Contact form */}
                        <form className="modal-form">
                            <div className="modal-row">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input id="name" name="name" type="text" placeholder="name…" required/>

                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" name="email" type="email" placeholder="john@gmail.com" required/>
                            </div>

                            <div className="modal-row">
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="write message..."
                                    rows={8}
                                />
                            </div>

                            <div className="modal-actions">
                                <button type="submit" className="modal-submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Modal;
