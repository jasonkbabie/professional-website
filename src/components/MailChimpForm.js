import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./NewsLetter";

export const MailchimpSubscribe = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            <MailChimpSubscribe
                url={postUrl}
                render={({subscribe, status, message}) => (
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        />
                )}
                />
        </>
    )
}