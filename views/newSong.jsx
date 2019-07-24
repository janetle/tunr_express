var React = require('react');

class Form extends React.Component {
  render() {
    console.log("new song");
    
    let listOfArtists = this.props.data.map(item => {
      return (item.name);
    });
    
    let artistChoice = listOfArtists.map(name => {
      return <option value="">{name}</option>

    })
    return (
      <html>
        <head>
              <link href="https://fonts.googleapis.com/css?family=Dosis|Work+Sans&display=swap" rel="stylesheet"/>

              <link rel="stylesheet" type="text/css" href="/style1.css"/>
          </head>
        <body>
        <header>
            <h1> Artist List</h1>
              <nav>
                <ul>
                  <li><a href="/">All artists</a></li>
                  <li><a href="#">All songs</a></li>
                  <li><a href="#">Search songs</a></li>
                </ul>
              </nav>
          </header>
          <div>
            <h1>Add new song</h1>
            <form method="POST" action={'/playlists'}>
                <select>
                {artistChoice}
                </select>
                
                
               
                <input type="submit"/>
            </form>
          </div>
          <footer> © 2019 Song-collection GA All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = Form;