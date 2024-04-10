const Home = () => {
    return (
        <>
            {/* First Child */}
            <p style={{ textAlign: "center", fontSize: "15px", padding: "8px 0", color: "#fff", background: "linear-gradient(90deg, #812868 0%, #f954a4 100%)" }} class="p-2">Welcome to the National Institute of Fine Arts <i class="fa-solid fa-phone p-2">&nbsp;&nbsp;9555112200</i><i class="fa-solid fa-phone p-2">&nbsp;&nbsp;9810130552</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-envelope p-2">&nbsp;&nbsp;admission@nifafinearts.com</i><i class="fa-brands fa-facebook p-2"></i><i class="fa-brands fa-twitter p-2"></i><i class="fa-brands fa-instagram p-2"></i><i class="fa-brands fa-youtube p-2"></i></p>
            {/* Second Child */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="./asset/img/nifa-logo.png" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Activities</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Admission</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Art Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Franchise</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Online Classes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Videos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pay Fee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Third Child */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./asset/img/v1.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./asset/img/v2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./asset/img/v1.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* Fourth Child */}
            <div class="container"> <div class="ticker"> <div class="title"><h3 style={{ fontWeight: "bold", display: "inline-block", fontSize: "16px", lineHeight: "23px", textAlign: "justify" }}>Nifa Updates:: </h3></div><div class="news"> <marquee class="news-content"> <p><strong style={{ color: "#b11e6f" }}>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.</strong></p> </marquee> </div> </div> </div>
            {/* Fifth Child */}
            <div class="col d-flex justify-content-center">
                <div class="container">
                    <h1>Welcome To <span>National Institute of Fine Arts</span></h1>
                    <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts&nbsp; (NIFA) was established by MRS&nbsp;RENU KHERA in Delhi and&nbsp;NCR of Delhi on July 2005.&nbsp;Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
                    <p>National Institute of Fine Arts<strong>&nbsp;</strong>is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art&nbsp;is&nbsp;one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute&nbsp;prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>
                    <p><strong>National Institute of Fine Arts&nbsp;is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</strong></p>
                    <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Read More</button>
                </div>
            </div>
            {/* Sixth Child */}
            <section class="mt-4" style={{ background: "linear-gradient(100deg, rgba(0, 0, 0, 1), rgba(35, 31, 32, 0.6)), url(../images/appbg.jpg) no-repeat center", backgroundSize: "cover", backgroundAttachment: "fixed", padding: "90px 15px", color: "#fff" }}>
                <div class="container-fluid" style={{ paddingRight: "15px", paddingLeft: "15px", marginRight: "auto", marginLeft: "auto" }}>
                    <div class="row">
                        <div class="container" style={{ width: "750px" }}>
                            <div class="col-md-6" style={{ position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px", float: "right" }}>
                                <div>
                                    <div class="card-body">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" style={{ position: "relative", minHeight: "1px", paddingRight: "15px", paddingLeft: "15px" }}>
                                <div>
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ color: "#fff", textAlign: "left", fontSize: "30px" }}>Online Classes</h5>
                                        <p class="card-text" style={{ margin: "0 0 10px" }}>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.</p>
                                        <p style={{ fontSize: "15px", lineHeight: "23px", fontHeight: "normal" }}>We wish u Happy Learning. Stay Safe n Healthy.</p>
                                        <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Read More</button>
                                        <p class="nfothed">Download the app</p>
                                        <ul>
                                            <li class="list-inline-item" style={{ float: "left" }}><a href="./asset/img/gplay.png"><img src="https://www.nifafinearts.com/images/gplay.png" style={{ width: "150px", display: "block", maxWidth: "100%", height: "auto", float: "left" }} class="img-responsive" /></a></li>
                                            <li class="list-inline-item" style={{ float: "left" }}><a href="./asset/img/appstore.png"><img src="https://www.nifafinearts.com/images/appstore.png" style={{ width: "150px", display: "block", maxWidth: "100%", height: "auto", float: "left" }} class="img-responsive" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seveth Child */}
            <div class="container mt-4">
                <h2 style={{ width: "100%", textAlign: "center", display: "inline-block", margin: "0px auto" }}>Our Courses</h2>
                {/* Content here */}
                <div class="row mt-4">
                    <div class="m-1 col-md-3" style={{ width: "18rem", float: "left" }}>
                        <img src="./asset/img/animation-sketching.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>6 Months Diploma in Sketching &amp; Oil Painting - Regular/Part time</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a1.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>1 to 3  Months Certificate Hobby Course (Regular and Weekend)</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem", float: "left" }}>
                        <img src="./asset/img/a2.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>One Year Diploma in Fine Arts-Regular/Part Time-Level-3</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a3.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Two years Advance Diploma in Fine Arts - Regular/Part time</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/entrance-prepration.jpg" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Entrance Preparation For N.I.D</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a4.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>B.F.A from UGC Recognised University</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a5.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>M.A in Painting from UGC Recognised University</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/entrance-prepration3.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Entrance preparation for B.F.A</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a6.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Kids 1 year Diploma (Level-1)</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a7.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Kids 1 year Diploma (Level-2)</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/entrance-prepration2.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>Entrance Preparation for NIFT</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/a8.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                        <div class="card-body">
                            <p style={{ margin: "0 0 10px", fontSize: "15px", color: "#000", lineHeight: "23px" }}>3 Months Hobby Certificate Course For Kids</p>
                            <button type="button" class="btn btn-outline" onclick="window.location.href='about-us.php'" style={{ background: "linear-gradient(90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)", borderRadius: "30px", marginTop: "1rem", fontSize: "15px", padding: "10px 20px", color: "#fff", fontFamily: "inherit" }}>Know More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eight Child */}
            <div class="container mt-4">
                <h2 style={{ width: "100%", textAlign: "center", display: "inline-block", margin: "0px auto" }}>Students Work</h2>

                <div class="row mt-4">
                    <div class="m-1 col-md-3" style={{ width: "18rem", float: "left" }}>
                        <img src="./asset/img/s1.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s2.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s3.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "100" }} alt="..." />
                    </div>

                    {/* Content here */}
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s4.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s5.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "100" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s6.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s7.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s8.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s9.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s10.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s12.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "100" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s13.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>
                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s14.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s15.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s16.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s17.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s18.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s19.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s20.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s21.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>

                    <div class="m-1 col-md-3" style={{ width: "18rem" }}>
                        <img src="./asset/img/s22.jpg" class="card-img-top" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "block", maxWidth: "100%", height: "auto" }} alt="..." />
                    </div>
                </div>
            </div>

            {/* Eight Child */}

            <footer>
                <div class="container-flute" style={{ paddingRight: "15px", paddingLeft: "15px", marginRight: "auto", marginLeft: "auto", paddingTop: "5rem", paddingBottom: "2rem", color: "#000", background: "url(../images/fotbg2.jpeg) no-repeat", background: "Wheat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div class="container mt-4">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <h4 style={{ width: "100%", textAlign: "center", display: "inline-block", margin: "0px auto" }}>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h4>
                            <p class="text-right mb-0">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;