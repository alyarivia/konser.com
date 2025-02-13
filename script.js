<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemesanan Tiket Konser</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f3f3;
        }
        .header {
            background-color: #FF5722;
            padding: 20px;
            text-align: center;
            color: white;
        }
        .nav-bar {
            display: flex;
            justify-content: space-around;
            background-color: #333;
        }
        .nav-bar a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
        }
        .nav-bar a:hover {
            background-color: #ddd;
            color: black;
        }
        .main-content {
            padding: 20px;
        }
        .ticket {
            background-color: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .ticket img {
            width: 100%;
            border-radius: 8px;
        }
        .ticket h2 {
            margin: 10px 0;
        }
        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        .available {
            color: green;
            font-weight: bold;
        }
        .sold-out {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Selamat Datang di Konser.com</h1>
    </div>
    <div class="nav-bar">
        <a href="#">Beranda</a>
        <a href="#">Konser</a>
        <a href="#">Cara Pembelian</a>
        <a href="#">Kontak</a>
    </div>
    <div class="main-content">
        <div class="ticket">
            <img src="https://assets.onecompiler.app/436p97vzv/438rdndnx/096ae84a-d43f-4262-ac6f-570a7752f411-1735810348230-34980cbfe50ea7d0f06e19b1af31f724%5B1%5D.jpg" alt="Konser 1">
            <h2>DAY6 3RD WORLD TOUR (FOREVER YOUNG) in JAKARTA 2025</h2>
            <p>03 Mei 2025</p>
            <p>Tanjung Priok, Jakarta Utara</p>
            <p><b>IDR. 900.000</b></p>
            <button class="available">Tersedia sekarang</button>
        </div>
        <div class="ticket">
            <img src="https://assets.onecompiler.app/436p97vzv/438rdndnx/5372f97f-d9a7-4760-a646-30c025d91ffd-1736393853566-5a666e80d003602514733b783f416a43%5B1%5D.jpg" alt="Konser 2">
            <h2>THE SCRIPT SATELLITES WORLD TOUR - JAKARTA</h2>
            <p>14 Februari 2025</p>
            <p>Tangerang</p>
            <p><b>IDR. 660.000</b></p>
            <button class="available">Tersedia sekarang</button>
        </div>
        <div class="ticket">
            <img src="https://assets.onecompiler.app/436p97vzv/438rdndnx/37af8390-eb16-48a6-bacb-9e4755db4d15-1737516456117-d4a714cd061e490af693bbd85835b286%5B1%5D.jpg" alt="Konser 3">
            <h2>NIKI: Buzz World Tour Jakarta (Public Sale)</h2>
            <p>16 Februari 2025</p>
            <p>Jakarta Utara</p>
            <p><b>IDR. 977.500</b></p>
            <button class="available">Tersedia sekarang</button>
        </div>
        <div class="ticket">
            <img src="https://assets.onecompiler.app/436p97vzv/438rdndnx/50ccea33-5e4d-4a7c-bd33-b8634142bdf9-1730260787311-130330f3bbdd0dc2d917993f3852a5b9%5B1%5D.jpg" alt="Konser 4">
            <h2>An Evening of Classical Romance George Harliono Valentine Concert</h2>
            <p>14 Februari 2025</p>
            <p>Sawah Besar, Jakarta Pusat</p>
            <p><b>IDR. -</b></p>
            <button class="sold-out">Terjual habis</button>
        </div>
    </div>
    <div class="footer">
        <p>&copy; 2025 Konser.com</p>
    </div>
</body>
</html>