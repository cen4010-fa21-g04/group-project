import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reservations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="reservations.css"></link>
      </Head>
      <div className="isolate bg-white">
        <main>

        <div className="topnav">
            <a className="active" href="reservations">Reservations</a>
            <a href="menu">Menu</a>
            <a href="cart">Cart</a>
        </div>
          <div className="relative px-6 lg:px-8">
                <div style={{ backgroundColor: "#CC0000", paddingLeft: 16, margin: 0, fontFamily: "Arial, Helvetica, sans-serif"}}>
                    <div>
                        <br></br>
                        <form>
                            <input type="text" id="date" name="date" placeholder = " Input Date " style={{borderColor: "black", borderWidth: "3px", textAlign: "center"}}></input> &nbsp;&nbsp;&nbsp;
                            <input type="text" id="nofpeople" name="nofpeople" placeholder = " Input # of People " style={{borderColor: "black", borderWidth: "3px", textAlign: "center"}}></input> &nbsp;&nbsp;&nbsp;
                            <input type="submit" value=" Submit " style={{backgroundColor: "green", color: "white", borderColor: "black", borderWidth: "3px"}}></input>
                        </form>
                    </div>   

                    <br></br>
                    <br></br>
                    <br></br>

                    <div style = {{backgroundColor: "white", marginRight: "1200px"}}>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                    <br></br>
                    <form>
                        <input type="text" id="name" name="name" placeholder = " Input Name " style={{borderColor: "black", borderWidth: "3px", textAlign: "center"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="text" id="phone" name="phone" placeholder = " Input Phone Number " style={{borderColor: "black", borderWidth: "3px", textAlign: "center"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="submit" value=" Reserve " style={{backgroundColor: "green", color: "white", borderColor: "black", borderWidth: "3px"}}></input>
                        <br></br><br></br>
                    </form>
                    </div>                 
                </div>
          </div>
          <footer style = {{backgroundColor: "gray", textAlign: "right", marginLeft: "32px", marginRight: "32px"}}>
          <a href="login" style={{fontSize: "12px"}}><u><b>Employee / Restaurant View</b></u>&nbsp;&nbsp;</a>
          </footer>
        </main>
      </div>
    </>
  );
}