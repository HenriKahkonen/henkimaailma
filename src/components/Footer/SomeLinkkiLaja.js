import './SomeLinkkiLaja.css'

const SomeLinkkiLaja = () => {
    return (
        <footer className="Somelinkkilaja">
            <div><a href="https://www.youtube.com/@henkonen"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-youtube.png'} alt="YouTube"></img></a></div>
            <div><a href="https://github.com/HenriKahkonen"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-github.png'} alt="GitHub"></img></a></div>
            <div><a href="https://discord.gg/GPtVSVaVz7"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-discord.png'} alt="Discord"></img></a></div>
            <div><a href="https://www.instagram.com/henk_kone/"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-instagram.png'} alt="Instagram"></img></a></div>
    {/*
            <div><a href="https://www.facebook.com/englannin.kuningas"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-facebook.png'} alt="Facebook"></img></a></div>
    */}
            <div><a href="https://twitter.com/Henkonen"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-twitter.png'} alt="Twitter"></img></a></div>
    {/*
            <div><a href="https://open.spotify.com/user/herska-"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-spotify.png'} alt="Spotify"></img></a></div>
    */}
            <div><a href="https://www.linkedin.com/in/henri-kähkönen"><img className="SomeLink" src={process.env.PUBLIC_URL+'/img/80x80-linkedin.png'} alt="LinkedIn"></img></a></div>
        </footer>
    )
}

export default SomeLinkkiLaja;