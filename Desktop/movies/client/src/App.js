import './App.css';
import React, {useEffect, useState} from 'react';
import {
  useQuery,
  useLazyQuery,
  gql
} from "@apollo/client";
// import "@pathofdev/react-tag-input/build/index.css";
import {IoMdClose} from 'react-icons/io'
import {BiArrowBack} from 'react-icons/bi'
import {CgEnter} from 'react-icons/cg'
import {VscClearAll} from 'react-icons/vsc'
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import { WithContext as ReactTags } from 'react-tag-input';


function App() {

  const [args, setArgs] = useState({
    'titles': [],
    'revenue':[],
    'runtime':[],
    'release_date':[],
    'popularity':[],
    'genres':[],
    'keywords':[],
    'actors':[],
    'directors':[],
    'titleSwitchAnd':true,
    'genreSwitchAnd':true,
    'keywordSwitchAnd':true,
    'actorSwitchAnd':true,
    'directorSwitchAnd':true,
  })
  const [total, setTotal] = useState(0)
  const [movies, setMovies] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [currKeyword, setCurrKeyword] = useState('')
  const [keywordTags, setKeywordTags] = useState([]);
  const [actorTags, setActorTags] = useState([]);
  const [titleTags, setTitleTags] = useState([])
  const [directorTags, setDirectorTags] = useState([])
  const [keywordCodes, setKeywordCodes] = useState([])
  const [actorCodes, setActorCodes] = useState([])
  const [directorCodes, setDirectorCodes] = useState([])
  const [lastActors, setLastActors] = useState([])
  const [lastDirectors, setLastDirectors] = useState([])

  const genreCodes = [
    {"id":"10751" , "text":"Family"},
    {"id":"14", "text":"Fantasy"},
    {"id":"28", "text":"Action"},
    {"id":"12", "text":"Adventure"},
    {"id":"18", "text":"Drama"},
    {"id":"35", "text":"Comedy"},
    {"id":"80", "text":"Crime"},
    {"id":"16", "text":"Animation"},
    {"id":"10749", "text":"Romance"},
    {"id":"53", "text":"Thriller"},
    {"id":"36", "text":"History"},
    {"id":"878", "text":"Science Fiction"},
    {"id":"10752", "text":"War"},
    {"id":"10402", "text":"Music"},
    {"id":"10770", "text":"TV Movie"},
    {"id":"9648", "text":"Mystery"},
    {"id":"37", "text":"Western"},
    {"id":"27", "text": "Horror"},
    {"id":"99", "text": "Documentary"},
]
  
useEffect(() => {
  fetch("./keywordsTest.json")
  .then(res => res.text())          // convert to plain text
  .then(text => setKeywordCodes(JSON.parse(text)))
  fetch("./directorsTest.json")
  .then(res => res.text())          // convert to plain text
  .then(text => setDirectorCodes(JSON.parse(text)))
  fetch("./actorsTest.json")
  .then(res => res.text())          // convert to plain text
  .then(text => setActorCodes(JSON.parse(text)))
}, []);

useEffect(()=>{
  console.log('movies.length', movies.length)
}, [movies])

useEffect(()=>{
  console.log('total', total)
}, [total])

useEffect(()=>{
  console.log('currPage1', currPage)
}, [currPage])


const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  
  const delimiters = [KeyCodes.enter];

  const clearArgs = () => {
    let temp = {
      'titles': [],
      'revenue':[],
      'runtime':[],
      'release_date':[],
      'popularity':[],
      'genres':[],
      'keywords':[],
      'actors':[],
      'directors':[],
      'titleSwitchAnd':true,
      'genreSwitchAnd':true,
      'keywordSwitchAnd':true,
      'actorSwitchAnd':true,
      'directorSwitchAnd':true,
    }
    setArgs(temp)
    document.getElementById('releaseForm').reset();
    document.getElementById('runtimeForm').reset();
    document.getElementById('titleForm').reset();
    document.getElementById('genreForm').reset();
    document.getElementById('actorForm').reset();
    document.getElementById('keywordForm').reset();
    document.getElementById('directorForm').reset();
  }

  const handleGenreDelete = (i) => {
    let temp = {...args}
    temp["genres"].splice(i, 1)
    setArgs(temp)
  };

  const handleGenreAddition = (tag) => {
    if(!['Action', 'Adventure', 'Animation', 'Comedy', 'Crime','Documentary','Drama'
    ,'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance'
    ,'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'].includes(tag.text)){
      alert('invalid genre entered')
      return
    }
    if(args["genres"].length < 5){
      let temp = {...args}
      temp["genres"].push(tag)
      setArgs(temp)
    }
    else{
      alert('Max Genres Reached!')
    }

  };

  const handleDirectorDelete = (i) => {
    setDirectorTags(directorTags.filter((tag, index) => index !== i));
    let temp = {...args}
    temp["directors"].splice(i, 1)
    setArgs(temp)
  };

  const handleDirectorAddition = (tag) => {
    if(args["directors"].length < 5){
      setDirectorTags([...directorTags, tag]);
      let temp = {...args}
      temp["directors"].push(tag)
      setArgs(temp)
    }
    else{
      alert('Max Directors Reached!')
    }

  };

  const handleTitleDelete = (i) => {
    setTitleTags(titleTags.filter((tag, index) => index !== i));
    let temp = {...args}
    temp["titles"].splice(i, 1)
    setArgs(temp)
  };

  const handleTitleAddition = (tag) => {
    if(args["titles"].length < 5){
      setTitleTags([...titleTags, tag]);
      let temp = {...args}
      temp["titles"].push(tag)
      setArgs(temp)
    }
    else{
      alert('Max Titles Reached!')
    }


  };

  const handleKeywordDelete = (i) => {
    setKeywordTags(keywordTags.filter((tag, index) => index !== i));
    let temp = {...args}
    temp["keywords"].splice(i, 1)
    setArgs(temp)
  };

  const handleKeywordAddition = (tag) => {
    if(args["keywords"].length < 5){
      setKeywordTags([...keywordTags, tag]);
      let temp = {...args}
      temp["keywords"].push(tag)
      setArgs(temp)
    }
    else{
      alert('Max Keywords Reached!')
    }


  };

  const handleActorDelete = (i) => {
    setActorTags(actorTags.filter((tag, index) => index !== i));
    let temp = {...args}
    temp["actors"].splice(i, 1)
    setArgs(temp)
  };

  const handleActorAddition = (tag) => {

    if(args["actors"].length < 5){
      setActorTags([...actorTags, tag]);
      let temp = {...args}
      temp["actors"].push(tag)
      setArgs(temp)
    }
    else{
      alert('Max Actors Reached!')
    }

  };

  const test = gql`
  query ($input:Args!){
    getMoviesBasedOnConditions(input: $input){
      title runtime original_language release_date poster_path overview popularity
      keywords
      {
        name
        id
      }
      revenue
      genres
        {
          name
          id
        }
    }
  }
  `

  const actors = gql`
  query ($input:[PersonInput]!){
    getActorPictures(input: $input){
      text id profile_path
    }
  }
  `

  const directors = gql`
  query ($input:[PersonInput]!){
    getDirectorPictures(input: $input){
      text id profile_path
    }
  }
  `

  const Movie = (movie, id) => {
  movie = movie["movie"]
  let newGenres = []
  for (let index = 0; index < movie["genres"].length; index++) {
    const element = movie["genres"][index]["name"]
    newGenres.push(element)
  }

  let newKeywords = []
  for (let index = 0; index < movie["keywords"].length; index++) {
    const element = movie["keywords"][index]["name"]
    newKeywords.push(element)
  }

  let permGenres = newGenres.map((genre, id) => (
  <span className="movieGenre">
    {genre}
  </span>))

  
let permKeywords = newKeywords.map((genre, id) => (
  <span className="movieGenre">
    {genre}
  </span>))

  return(<div className = "movieBlock">
    <div className="inlinePic">
    {movie["poster_path"] != null && <img className="posterPath" height={280} src={"https://image.tmdb.org/t/p/w500/" + movie["poster_path"]} />}
    {movie["poster_path"] == null && <img className="posterPath" height={280} src={"blank_movie_poster.png"}/>}
    </div>

  <div className="inlineStuff">
  <div className="line1">
    <span className="title">{movie["title"]}</span>
    <span className="movieReleaseDate">{movie["release_date"]}</span>
    </div>
    {/* <div/> */}
    <div className="line2">
    <span className="movieStuff">{permGenres}</span>
    <span className="movieLength">{movie["runtime"]} minutes</span>
    </div>
    <div className="overview">{movie["overview"]}</div>
  </div>
  </div>
  )
  }
    
  const ActorComponent = (actor, id) => {

    let index = actor["id"]
    actor = actor["person"]
    let proPic = actor["profile_path"]

    if(proPic == "none" || proPic == null){
      return(
      <div className = "outer">
      <div className="actorContainer">
        <button onClick = {(e) => handleActorDelete(index)} className="removeButton"><IoMdClose/></button>
        <img className = "actorPic" height={150} width = {100} src={"blank_profle_pic.png"} />
        <div className = "actorName"><span className="actorNameSpan">{actor["text"]}</span></div>
        </div>
        </div>
        )
    }
    else{
      return(
      <div className = "outer">
      <div className="actorContainer">
        <button onClick = {(e) => handleActorDelete(index)} className="removeButton"><IoMdClose/></button>
        <img className = "actorPic" height={150} src={"https://image.tmdb.org/t/p/w500/" + actor["profile_path"]} />
        <div className = "actorName"><span className="actorNameSpan">{actor["text"]}</span></div>
      </div>
      </div>
      )
    }

  }

  const DirectorComponent = (director, id) => {

    let index = director["id"]
  
    director = director["person"]
    let proPic = director["profile_path"]

    if(proPic == "none" || proPic == null){
      return(
      <div className = "outer">
      <div className="actorContainer">
        <button onClick = {(e) => handleDirectorDelete(index)} className="removeButton"><IoMdClose/></button>
        <img className = "actorPic" height={150} width = {100} src={"blank_profle_pic.png"} />
        <div className = "actorName"><span className="actorNameSpan">{director["text"]}</span></div>
        </div>
        </div>
        )
    }
    else{
      return(
      <div className = "outer">
      <div className="actorContainer">
        <button onClick = {(e) => handleDirectorDelete(index)} className="removeButton"><IoMdClose/></button>
        <img className = "actorPic" height={150} src={"https://image.tmdb.org/t/p/w500/" + director["profile_path"]} />
        <div className = "actorName"><span className="actorNameSpan">{director["text"]}</span></div>
      </div>
      </div>
      )
    }

  }

  const DelayedActors = () => {

    let tempArgs = {...args}
    let temp = [...tempArgs["actors"]]
    const [getActors, { called, loading, error, data }] = useLazyQuery(actors, { variables:   { input: temp
    }
    });
    if (called && loading) return <div className="actorsBlock">
    {lastActors.map((person, id) => (
        <ActorComponent id = {id} person = {person}/>
    ))}
    </div>;
    if (!called) {
      getActors()
      return <div>
      </div>;
    }
    if(error){
      console.log(error.message)
      return <div>{error.error}</div>
    }
    else {
      setLastActors(data['getActorPictures'])
      return <div className="actorsBlock">
      {data['getActorPictures'].map((person, id) => (
          <ActorComponent id = {id} person = {person}/>
      ))}
      </div>;

    }
  }

  const DelayedDirectors = () => {

    let tempArgs = {...args}
    let temp = [...tempArgs["directors"]]


    const [getDirectors, { called, loading, error, data }] = useLazyQuery(directors, { variables:   { input: temp
    }
    });
    if (called && loading) return <div className="actorsBlock">
    {lastDirectors.map((person, id) => (
        <DirectorComponent id = {id} person = {person}/>
    ))}
    </div>;
    if (!called) {
      getDirectors()
      return <div>
      </div>;
    }
    if(error){
      console.log(error.message)
      return <div>{error.error}</div>
    }
    else {
      setLastDirectors(data['getDirectorPictures'])
      return <div className="actorsBlock">
      {data['getDirectorPictures'].map((person, id) => (
          <DirectorComponent id = {id} person = {person}/>
      ))}
      </div>;

    }
  }
  

  const DelayedMovies = () => {

    const [loader, setLoader] = useState(false)

    let tempArgs = {}
    for (var key in args) {
      if(key != 'titleSwitchAnd' && key != 'genreSwitchAnd'&& key != 'keywordSwitchAnd'&& key != 'actorSwitchAnd'&& key != 'directorSwitchAnd'){
        tempArgs[key] = JSON.stringify(args[key])
      }
      else{
        tempArgs[key] = args[key]
      }
    }

    const emulateFetch = _ => {
      return new Promise(resolve => {
        resolve([{ data: "ok"  }]);
      })
    };
    
    const handleClick = () => {
      refetch({
        input: tempArgs
      })
    };

    const {error, data, refetch} = useQuery(test, emulateFetch, {
      variables: { tempArgs },
      refetchOnWindowFocus: false,
      fetchPolicy: "network-only",
      enabled: false,
      
    });

    if(data != undefined){
      setMovies(data['getMoviesBasedOnConditions'])
      if(data['getMoviesBasedOnConditions'].length == 0){
        setTotal(-1)
      }
      else{
        setTotal(data['getMoviesBasedOnConditions'].length)
      }
    }
  

    return <div className="loadDiv">
    <button className = "loadButton" onClick={(e)=>{
      setLoader(true)
      handleClick(e)
    }}>
    
    {!loader && <span className="querySpan">Query</span>}

    {!loader && <CgEnter/>}
    {loader && <div className="loading"/>}

    </button>



    {/* {loader && 
    
    <div className="loadingBlock">
    <div className="loading"/>
    </div>
} */}

    </div>
  }


  const RealMovies = () => {
    return(
      <div className="realMovies">
<div className="backDiv">
<button className = "backButton" onClick = {(e)=>
            {
            setTotal(0)
            setMovies([])
            setCurrPage(1)
            }
            }><BiArrowBack/>
            {/* <span className="backButtonText">Back to Query</span> */}
            </button></div>

        {total == -1 && <div>No Movies Found</div>}

        {total > 0 && currPage*25 <= total && <div className="numResults">{currPage*25-25}-{currPage*25} of {total} results</div>}

        {total > 0 && currPage*25 > total && <div className="numResults">{currPage*25-25}-{total} of {total} results</div>}

        {currPage > 1 && total > 0 && currPage * 25 < total && 

          <div className="pageButtonDiv">
          <button class="previous" onClick={() => {
          setTimeout(() => {
            try{
              setCurrPage(currPage-1)
            }
            catch (error){
              console.log('error', error)
            }}, 1);
                  }}><MdNavigateBefore/>
                  </button>
                    <span className="pageNumber">{currPage}</span>
                  <button class="next" onClick={() => {
              setTimeout(() => {
                try{
                  setCurrPage(currPage+1)
                }
                catch (error){
                  console.log('error', error)
                }}, 1);}}><MdNavigateNext/>
            </button>

            </div>}

            {currPage > 1 && total > 0 && !(currPage * 25 < total) && 

            <div  className="pageButtonDiv">
            <button class="previous" onClick={() => {
            setTimeout(() => {
              try{
                setCurrPage(currPage-1)
              }
              catch (error){
                console.log('error', error)
              }}, 1);
                    }}><MdNavigateBefore/>
                    </button>
                    <span className="pageNumber">{currPage}</span>

                    <button class="nextUnavailable"><MdNavigateNext/></button>

              </div>}


              {!(currPage > 1) && total > 0 && currPage * 25 < total && 

<div  className="pageButtonDiv">
<button class="previousUnavailable"><MdNavigateBefore/></button>
<span className="pageNumber">{currPage}</span>
        <button class="next" onClick={() => {
    setTimeout(() => {
      try{
        setCurrPage(currPage+1)
      }
      catch (error){
        console.log('error', error)
      }}, 1);}}><MdNavigateNext/>
  </button>

  </div>}


            <div className="allMoviesBlock">
            {movies.slice(currPage*25-25, currPage*25).map((movie, id) => (
               <Movie id = {id} movie = {movie}/>
            ))}
            </div>


            {currPage > 1 && total > 25 && currPage * 25 < total && 

<div className="pageButtonDiv">
<button class="previous" onClick={() => {
setTimeout(() => {
  try{
    setCurrPage(currPage-1)
  }
  catch (error){
    console.log('error', error)
  }}, 1);
        }}><MdNavigateBefore/>
        </button>
          <span className="pageNumber">{currPage}</span>
        <button class="next" onClick={() => {
    setTimeout(() => {
      try{
        setCurrPage(currPage+1)
      }
      catch (error){
        console.log('error', error)
      }}, 1);}}><MdNavigateNext/>
  </button>

  </div>}

  {currPage > 1 && total > 25 && !(currPage * 25 < total) && 

  <div  className="pageButtonDiv">
  <button class="previous" onClick={() => {
  setTimeout(() => {
    try{
      setCurrPage(currPage-1)
    }
    catch (error){
      console.log('error', error)
    }}, 1);
          }}><MdNavigateBefore/>
          </button>
          <span className="pageNumber">{currPage}</span>

          <button class="nextUnavailable"><MdNavigateNext/></button>

    </div>}


    {!(currPage > 1) && total > 25 && currPage * 25 <= total && 

<div  className="pageButtonDiv">
<button class="previousUnavailable"><MdNavigateBefore/></button>
<span className="pageNumber">{currPage}</span>
<button class="next" onClick={() => {
setTimeout(() => {
try{
setCurrPage(currPage+1)
}
catch (error){
console.log('error', error)
}}, 1);}}><MdNavigateNext/>
</button>

</div>}
        </div>
    )
  }
    
  const handleRange = (e) => {
    e.preventDefault()
    let parsed = parseFloat(e.target.value)
    if(e.target.value.length > 0){
      if(e.target.name == 0){
        if(!isNaN(parsed)){
          let temp = {...args}
          temp[e.target.title][0] = e.target.value
          setArgs(temp)
        }
      }
      else if(e.target.name == 1){
        if(!isNaN(parsed)){
          let temp = {...args}
          temp[e.target.title][1] = e.target.value
          setArgs(temp)
        }
      }
      else{
        if(!isNaN(parsed)){
          let temp = {...args}
          temp[e.target.title] = []
          setArgs(temp)
        }
      }
    }
    else{
      let temp = {...args}
      delete temp[e.target.title][e.target.name]
      setArgs(temp)
    }
  }

  const Genre = (props) => {
    let id = props.id
    let genre = props.genre
    if(args["genres"].includes(genre.text)){
      if(genre.text =="Documentary"){
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">Documentary</div>
          </div>
          </div>
          </li>
        )
      }
  
      else if(genre.text =="Science Fiction"){
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">Science Fiction</div>
          </div>

          </div>
          </li>
        )
      }
      else{
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">{genre.text}</div>
          </div>

          </div>
          </li>
        )
      }
    }
    else{
      if(genre.text =="Documentary"){
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">Documentary</div>
          </div>

          </div>
          </li>
        )
      }
  
      else if(genre.text =="Science Fiction"){
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">Science Fiction</div>
          </div>

          </div>
          </li>
        )
      }
      else{
        return(
          <li>
          <div>
          <div class="itemContainerTest">
          <button onClick = {(e) => handleGenreDelete(id)} className="removeButton"><IoMdClose/></button>
          <img className = "genreIconTest" src = {"./" + genre.text + ".svg"}/>
          <div className = "genreNameTest">{genre.text}</div>
          </div>

          </div>
          </li>
        )
      }
    }
  }

  const handleKeywordSubmission = (e) => {
    e.preventDefault()

    if(args["keywords"].length >= 24)
    {
      alert('Maximum keywords reached!')
      setCurrKeyword('')
    }
    else{
      if(currKeyword.length > 0){
        let temp = {...args}
        temp["keywords"].push(currKeyword)
        setArgs(temp)
        setCurrKeyword('')
      }
      else{
        setCurrKeyword('')
      }
    }
  }



  return (
    <div className="App">
    <div className="querymv">
    
    <span className="querymvspan">queryMV</span>
    
    <img className = "popcornIcon" src = {"./popcorn.svg"}/>
    </div>
    
    {total == 0 && 
    <div className="queryScreen">
    <div>

    <div>
    <div className = "toggleContainerTest">
    <div className = "blocks">
    <div className = "inputLabelDirectors">Titles</div>
    <div className = "tester">
    <span class="toggle slide">
    <input checked= {args["titleSwitchAnd"]} onChange = {(e)=>
    {
      let temp = {...args}
      temp["titleSwitchAnd"] = !temp["titleSwitchAnd"]
      setArgs(temp)
    }} className = "switchInput" id="titles" type="checkbox" />
    <label for="titles">
    <div class="card slide"></div>    
    </label>
    </span>
    </div>
    </div>
    <form id ="titleForm">
    <ReactTags
      classNames={
        {
        selected: 'ReactTags__selected'
      }
     
      }
        inputFieldPosition="top"
        handleDelete={handleTitleDelete}
        handleAddition={handleTitleAddition}
        // handleDrag={handleDrag}
        delimiters={delimiters}
        // onClearAll={onClearAll}
        // onTagUpdate={onTagUpdate}
        suggestions={[]}
        placeholder=""
        minQueryLength={2}
        maxLength={32}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        // autocomplete={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        // inline={true}
        allowAdditionFromPaste={true}
        editable={false}
        clearAll={false}
        tags={args["titles"]}
    />
    </form>
    </div>
    </div>
    <div>

    <div>
    <div className = "toggleContainerTest">
    <div className = "blocks">
    <div className = "inputLabelDirectors">Genres</div>
    <div className = "tester">
    <span class="toggle slide">
    <input checked= {args["genreSwitchAnd"]} onChange = {(e)=>
    {
      let temp = {...args}
      temp["genreSwitchAnd"] = !temp["genreSwitchAnd"]
      setArgs(temp)
    }} className = "switchInput" id="genres" type="checkbox" />
    <label for="genres">
    <div class="card slide"></div>    
    </label>
    </span>
    </div>
    </div>
    <form id = 'genreForm'>

<ReactTags
  classNames={
    {selected: 'hideGenres'}
  }
    inputFieldPosition="top"
    handleDelete={handleGenreDelete}
    handleAddition={handleGenreAddition}
    delimiters={delimiters}
    suggestions={genreCodes}
    placeholder=""
    minQueryLength={1}
    maxLength={32}
    autofocus={false}
    readOnly={false}
    allowUnique={true}
    allowAdditionFromPaste={true}
    editable={false}
    clearAll={false}
    tags={args["genres"]}
/>

<div className="genresGrid">
    {args["genres"].map((obj, id) => (

      <Genre id = {id} genre = {obj}/>

      ))}
      </div>

</form>
    </div>
    </div>
    </div>


    <div className = "toggleContainerTest">
    <div className = "blocks">
    <div className = "inputLabelDirectors">Keywords</div>
    <div className = "tester">
    <span class="toggle slide">
    <input checked= {args["keywordSwitchAnd"]} onChange = {(e)=>
    {
      let temp = {...args}
      temp["keywordSwitchAnd"] = !temp["keywordSwitchAnd"]
      setArgs(temp)
    }} className = "switchInput" id="keywords" type="checkbox" />
    <label for="keywords">
    <div class="card slide"></div>    
    </label>
    </span>
    </div>
    </div>
    </div>
    <form id = 'keywordForm'>

    <ReactTags
      classNames={
        {
        selected: 'ReactTags__selected'
      }
     
      }
        inputFieldPosition="top"
        handleDelete={handleKeywordDelete}
        handleAddition={handleKeywordAddition}
        delimiters={delimiters}
        suggestions={keywordCodes}
        placeholder=""
        minQueryLength={3}
        maxLength={20}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        allowAdditionFromPaste={true}
        editable={false}
        clearAll={false}
        tags={args["keywords"]}
    />




    <button className = "invisibleKeywordButton" onClick = {(e) => handleKeywordSubmission(e)} type="submit"/>
    </form>
    </div>

    <div>
    <div className = "toggleContainerTest">
    <div className = "blocks">
    <div className = "inputLabelDirectors">Actors</div>
    <div className = "tester">
    <span class="toggle slide">
    <input checked= {args["actorSwitchAnd"]}onChange = {(e)=>
    {
      let temp = {...args}
      temp["actorSwitchAnd"] = !temp["actorSwitchAnd"]
      setArgs(temp)
    }} className = "switchInput" id="actors" type="checkbox" />
    <label for="actors">
    <div class="card slide"></div>    
    </label>
    </span>
    </div>
    </div>
    </div>
    <form id = 'actorForm'>

    <ReactTags
      classNames={
        {selected: 'ReactTags__selected123'}
      }
        inputFieldPosition="top"
        handleDelete={handleActorDelete}
        handleAddition={handleActorAddition}
        delimiters={delimiters}
        suggestions={actorCodes}
        placeholder=""
        minQueryLength={5}
        maxLength={35}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        allowAdditionFromPaste={true}
        editable={false}
        clearAll={false}
        tags={args["actors"]}
    />


    <button className = "invisibleKeywordButton" onClick = {(e) => 
    
    {
      handleActorAddition(e)
    }} type="submit"/>
    </form>

    <DelayedActors/>

    </div>

    <div>
    <div className = "toggleContainerTest">
    <div className = "blocks">
    <div className = "inputLabelDirectors">Directors</div>
    <div className = "tester">

    <span class="toggle slide">
    <input checked= {args["directorSwitchAnd"]} onChange = {(e)=>
    {
      let temp = {...args}
      temp["directorSwitchAnd"] = !temp["directorSwitchAnd"]
      setArgs(temp)
    }} className = "switchInput" id="directors" type="checkbox" />
    <label for="directors">
    <div class="card slide"></div>    
    </label>
    </span>

    </div>
    </div>
    </div>
    
    <form id = 'directorForm'>

    <ReactTags
      classNames={
        {
        selected: 'ReactTags__selected123'
      }
      
      }
        inputFieldPosition="top"
        handleDelete={handleDirectorDelete}
        handleAddition={handleDirectorAddition}
        delimiters={delimiters}
        suggestions={directorCodes}
        placeholder=""
        minQueryLength={5}
        maxLength={35}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        allowAdditionFromPaste={true}
        editable={false}
        clearAll={false}
        tags={args["directors"]}
    />





    <button className = "invisibleKeywordButton" onClick = {(e) => handleActorAddition(e)} type="submit"/>
    </form>

    <DelayedDirectors/>
    </div>

<form id = "runtimeForm">
    <div className = "inputLabelAndBox">
    <div className = "inputLabel">Runtime</div>
    <input className = "inputBox1" min = "0" type = "number" id = 'runtime0' value = {args["runtime"][0]} name = {0} title = "runtime" onChange = {(e) => handleRange(e)}/>
    <input className = "inputBox2" min = "0" type = "number" id = 'runtime1' value = {args["runtime"][1]} name = {1} title = "runtime" onChange = {(e) => handleRange(e)} />
    </div></form>

    <form id = 'releaseForm'>
    <div className = "inputLabelAndBox">
    <div className = "inputLabel">Release Date</div>
    <input className = "inputBoxRelease1" type = "date" value = {args["release_date"][0]} name = {0} title = "release_date" onChange = {(e) => handleRange(e)}/>
    <input className = "inputBoxRelease2" type = "date" value = {args["release_date"][1]} name = {1} title = "release_date" onChange = {(e) => handleRange(e)} />
    </div>
    </form>



    <div className="clearDiv">
    <button className="clearButton" onClick = {(e)=>clearArgs()}><span className="queryButtonSpan">Clear</span><VscClearAll/></button>
    </div>
    {total == 0 && <DelayedMovies/>}
    </div>}
    {total != 0 && <RealMovies/>}

    </div>
  );
}


export default App;
