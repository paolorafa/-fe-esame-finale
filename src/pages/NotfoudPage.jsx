import React from "react";
import { Link } from "react-router-dom";

function NotfoudPage() {
  return (
    <div>
      <h1>La pagina non esiste </h1>

      <button>
        <Link to={"/home/client"}>torna alla Home</Link>
      </button>
    </div>
  );
}

export default NotfoudPage;
