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

        <div style={{backgroundColor: "white", overflow: "hidden", marginLeft: "32px", textAlign: "center"}}>
            <a href="reservationsmade" style = {{float: "left", color: "black", textAlign: "center", padding: "14px 16px", fontSize: "40px", textDecoration: "none", fontFamily: "papyrus", borderWidth: "2px", borderColor: "black"}}>Reservations Made</a>&nbsp;&nbsp;&nbsp;
            <a href="ordersplaced" style = {{float: "left", color: "black", textAlign: "center", padding: "14px 16px", fontSize: "40px", textDecoration: "none", fontFamily: "papyrus", borderRightWidth: "2px", borderTopWidth: "2px", borderBottomWidth: "2px", borderColor: "black"}}>Orders Placed</a>&nbsp;&nbsp;&nbsp;   
            <a href="updatemenu" style = {{backgroundColor: "orange", color: "white", float: "left", textAlign: "center", padding: "14px 16px", fontSize: "40px", textDecoration: "none", fontFamily: "papyrus", borderRightWidth: "2px", borderTopWidth: "2px", borderBottomWidth: "2px", borderColor: "black"}}>Update Menu Items</a>          
            
        </div>
          <div className="relative px-6 lg:px-8">
                <div style={{ backgroundColor: "#CC0000", paddingLeft: 16, margin: 0, fontFamily: "Arial, Helvetica, sans-serif"}}>
                <br></br>
                <br></br>

                    <div style = {{backgroundColor: "white", borderColor: "black", borderWidth: "2px", fontSize: "20px", fontFamily: "papyrus", marginRight: "1400px", textAlign: "center", color: "black"}}>
                        <b>Input Existing Menu Item</b>
                    </div>

                    <br></br>

                    <form>
                        <input type="text" id="menuid" name="menuid" placeholder = " Input Menu Item ID" style={{borderColor: "black", borderWidth: "3px", textAlign: "center", backgroundColor: "orange"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="submit" value=" Remove " style={{backgroundColor: "white", color: "black", borderColor: "black", borderWidth: "3px"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="submit" value=" Add " style={{backgroundColor: "green", color: "white", borderColor: "black", borderWidth: "3px"}}></input>
                    </form>

                    <br></br>
                    <br></br>

                    <div style = {{backgroundColor: "white", borderColor: "black", borderWidth: "2px", fontSize: "20px", fontFamily: "papyrus", marginRight: "1400px", textAlign: "center", color: "black"}}>
                        <b>Input New Menu Item</b>
                    </div>

                    <br></br>
                    
                    <form>
                        <input type="text" id="menuname" name="menuname" placeholder = " Input Menu Name " style={{borderColor: "black", borderWidth: "3px", textAlign: "center", backgroundColor: "orange"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="text" id="menuprice" name="menuprice" placeholder = " Input Menu Price " style={{borderColor: "black", borderWidth: "3px", textAlign: "center", backgroundColor: "orange"}}></input> &nbsp;&nbsp;&nbsp;
                        <input type="submit" value=" Add " style={{backgroundColor: "green", color: "white", borderColor: "black", borderWidth: "3px"}}></input>
                    </form>

                <br></br>
                <br></br>

                </div>
          </div>
          <footer style = {{backgroundColor: "gray", textAlign: "right", marginLeft: "32px", marginRight: "32px"}}>
          <a href="main" style={{fontSize: "12px"}}><u><b>Customer View</b></u>&nbsp;&nbsp;</a>
          </footer>
        </main>
      </div>
    </>
  );
}