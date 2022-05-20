const Profile = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "450px",
      display: "flex",
    }}
  >
    <div
      style={{
        width: "30%",
        background: "linear-gradient(to right,#01a9ac,#01dbdf)",
        padding: "30px 25px",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h4>Abdur Rakib Rony</h4>
      <p>Full Stack Developer</p>
    </div>
    <div
      style={{
        width: "70%",
        background: "#fff",
        padding: "30px 25px",
        borderTopRightRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
    >
      <div>
        <h3>Information</h3>
        <h4>Email: rakib.fstackdev@gmail.com</h4>
        <a
          href="https://github.com/ronyfr3"
          style={{display: "flex", alignItems: "center"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{width: "50px", height: "50px"}}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          Github
        </a>
      </div>
    </div>
  </div>
)

export default Profile
