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
                    <div>
                        <br></br>
                        <form action="/action_page.php">
                            <label htmlFor="date">Input Date: </label>
                            <input type="text" id="date" name="date"></input>
                            <br></br> <br></br>
                            <label htmlFor="nofpeople">Input # of People: </label>
                            <input type="text" id="nofpeople" name="nofpeople"></input>
                            <br></br><br></br>
                            <input type="submit" value=" Submit " style={{backgroundColor: "white"}}></input>
                        </form>
                    </div>   

                    <div>
                        <p>
                        </p>
                    </div>

                    <div>
                    <br></br>
                    <form action="/action_page.php">
                        <label htmlFor="name">Input Name: </label>
                        <input type="text" id="name" name="name"></input>
                        <br></br><br></br>
                        <label htmlFor="phone">Input Phone #: </label>
                        <input type="text" id="phone" name="phone"></input>
                        <br></br><br></br>
                        <input type="submit" value=" Reserve " style={{backgroundColor: "white"}}></input>
                        <br></br><br></br>
                    </form>
                    </div>                 
                </div>
          </div>
        </main>
      </div>
    </>
  );
}