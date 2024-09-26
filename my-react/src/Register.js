import React from "react";

function Register() {
    const [email, setEmail] = React.useState("");
    const [nama, setNama] = React.useState("");
    const [hp, setHp] = React.useState("");

    const handleSubmit = (e) => {
        Event.preventDefault();
        //kirim ke server
        alert(`Email: ${email}, Nama: ${nama}, HP: ${hp}`);
        console.log(`Email: ${email}, Nama: ${nama}, HP: ${hp}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nama : 
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
            </label>
            <label>
                Email : 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                HP : 
                <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} />
            </label>
            <input type="submit" value="Register" />
        </form>
    );
}
export default Register;