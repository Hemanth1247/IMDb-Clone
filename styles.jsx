/* General Styling */
body {
    background-color: #0e0e0e;
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #1c1c1c;
    position: sticky;
    top: 0;
    z-index: 100;
}

.app-title {
    color: #f5c518;
    font-size: 28px;
    margin: 0 auto; /* Center title */
    text-align: center;
    font-weight: bold;
}

.favorites-btn {
    background: #f5c518;
    color: black;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.favorites-btn:hover {
    background: #e0b112;
}

/* Search Section */
.search-section {
    text-align: center;
    margin: 30px 0;
}

.search-section h2 {
    font-size: 22px;
    margin-bottom: 15px;
}

/* Movie Grid */
.movies-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 movies per row */
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

/* Movie Card */
.movie-card {
    background: #222;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    transition: transform 0.2s ease-in-out;
}

.movie-card img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
}

.movie-card h3 {
    margin: 10px 0 5px;
    font-size: 18px;
}

.movie-card button {
    background: #f5c518;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
    margin-top: 8px;
}

.movie-card:hover {
    transform: scale(1.05);
}

/* Binge Quote */
.binge-quote {
    font-size: 20px;
    color: #f5c518;
    margin-top: 40px;
    text-align: center;
    font-weight: bold;
}
/* Center the Title */
.app-title {
    color: #f5c518; /* IMDb Yellow */
    font-size: 28px;
    margin: 0 auto;
    text-align: center;
}

/* Updated Favorites Button */
.favorites-btn {
    background: #ff4500; /* Bright Orange */
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
}

.favorites-btn:hover {
    background: #ff6347; /* Lighter Orange */
}
