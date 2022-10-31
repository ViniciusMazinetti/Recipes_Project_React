import { Button , CircularProgress, Container} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/LoginContext";
import { getAllRecipes } from "../../services/Recipe";

function Home() {

  const {signOut} = useAuth()

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true)

  const loadRecipes = async () => {
    const result = await getAllRecipes()

    console.log(result)

    setRecipes(result)
    setLoading(false)

   }

   useEffect(() => {
    loadRecipes()
   }, []);


  return ( 

    <Container>

      {loading ? 
      <div className="loading">
          <CircularProgress color="primary" />
      </div>
        :
      <div>
        {recipes.map((recipe, key) => (
          <div key={key}>
            {recipe.name}
          </div>
          ))
        }

        <Button variant="contained" onClick={() => signOut()} >
          signOut
        </Button>
      </div>
      }

    </Container>

    

   );
}

export default Home;