export function naBar(){
    return`
        <div id="Logo">
            <img
                src="data:image/webp;base64,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"
                alt="Image from Navbar"
            />
        </div>
        <div id="search">

        </div>
        <div id='options'>
            <a href="#"><button>Home</button></a>
            <a href="./create.html">
                <button>Create Post</button>
            </a>
        </div>
        
    `;
}