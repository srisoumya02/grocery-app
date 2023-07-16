import Navbar from "../components/Navbar"
const ContactUsPage = () => {


    
    return (
        <>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="display-4">Contact Us </div>
                <p className="lead">This is a simple ContactUsPage</p>
            </div>
            <div className="container">
                <section>
                    <p>
                        Lorem Ipsum was originally taken from a Latin text by the Roman philosopher Cicero,
                        a connection that Latin scholar Richard McClintock made in the 1980s.
                        It has gone through significant changes over the centuries, with words being taken out, shortened,
                        and added in. The word ‘lorem’, for example, isn’t a real Latin word, it’s a shortened version of the word ‘dolorem’, meaning pain.
                        This makes the current dummy text impossible to translate into English.
                    </p>
                    <p>
                        However, the original source was translated in 1914 to mean:
                        “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”
                    </p>
                </section>
            </div>
        </>
    )
}

export default ContactUsPage;