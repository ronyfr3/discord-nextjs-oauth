import SecureTemplate from "../public/secure-template"

const Secret = () => <p>You can only see it when you are logged in !</p>

export default SecureTemplate(Secret)
