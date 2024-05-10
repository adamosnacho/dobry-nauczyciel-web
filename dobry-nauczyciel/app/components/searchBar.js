import Image from 'next/image';
export default function SearchBar({router}) {
    return (
        <div className="searchBar">
            <h3 className="searchLabel">Wyszukaj Nauczyciela:</h3>
            <textarea className="searchArea" rows={1} maxlength={25} placeholder="Wyszukaj..."></textarea>
            <button style={{backgroundColor:"transparent",filter: "invert()", padding:"0px", borderStyle:"none", paddingLeft:"5px"}}>
                <Image src="/search.png" width={30} height={30}/>
            </button>
        </div>
    )
}