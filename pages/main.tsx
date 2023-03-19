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

          <div className="relative px-6 lg:px-8">
                <div style={{ backgroundColor: "#CC0000", paddingLeft: 16, margin: 0, fontFamily: "Arial, Helvetica, sans-serif"}}>
                <br></br>
                    <div style={{backgroundColor: "white", fontSize: "60px", fontFamily: "papyrus", textAlign: "center", marginLeft: "500px", marginRight: "500px", borderColor: "black", borderWidth: "2px"}}>
                       <b>Welcome to OnlyTable!</b>
                    </div> 
                   <br></br><br></br>
                    <div style = {{textAlign: "center", fontFamily: "papyrus", fontSize: "40px"}}>
                        <a href = "reservations" style={{backgroundColor: "orange", textAlign: "center", borderLeftWidth: "3px", borderTopWidth: "3px", borderRightWidth: "5px", borderBottomWidth: "5px", borderColor: "black"}}> Make a Reservation </a>
                    </div>
                    <br></br><br></br>
                    <div style = {{textAlign: "center", fontFamily: "papyrus", fontSize: "40px"}}>
                    <a href = "menu" style={{backgroundColor: "orange", textAlign: "center", borderLeftWidth: "3px", borderTopWidth: "3px", borderRightWidth: "5px", borderBottomWidth: "5px", borderColor: "black"}}> Place an Order </a>
                    </div>
                    <br></br><br></br>
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