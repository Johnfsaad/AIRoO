

<!DOCTYPE html>
<html class="">

<head>

  <title>AiRoO</title>
<meta charset="utf-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1">
  









   <script src="js/script_co.js"></script>
   <link rel="stylesheet" href="css/styles_co.css">
   <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
   
<link href="css/image.css"type="text/css" rel="stylesheet" media="all">
  <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all">
  <link href="css/style.css" type="text/css" rel="stylesheet" media="all">

</head>

<body>
  <img src="images/banner_c.jpg">
  <div id="LayoutDiv1">
</div>

    

           
            
            
         
  
  
  <div id='cssmenu'>
  <ul>
          <li class='#'><a href='index.html'>Home</a></li>
          <li ><a  href="#services">services</a> </li>
          <li ><a  href="#contact">Contac Us</a></li>
          <li ><a  href="#register">register</a> </li>
          

</ul>
</div>
 
 <span style="display:flex; justify-content:flex-end; width:95%; padding:20px;">
 <button type="button" class="btn  ml-lg-2 ls-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal">
              Login
            </button> 
            
           
      
</span>








<div class="register py-4" id="register">
  <div class="container py-lg-5">
    <div class="row register-form py-md-5">

      <div class="col-lg-4 register-bottom d-flex flex-column register-right-ls">
        <div class="title-wthree">
          <h3 class="agile-title">
            register
          </h3>
          <span></span>
        </div>
        <p class="font-weight-bold text-capitalize">become a member of
          <span>AiRoO</span>
        <p class="pb-sm-5">rrrrrrrrrrrrrrrrrrrr.</p>

        <p></p>
      </div>
      <div class="offset-lg-2"></div>
      <div class="col-lg-6 wthree-form-left py-sm-5">





        <div class="register-top1">
          <form action="connect.php" method="post" >
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-user"></span>
                  </label>
                </div>
                <div class="col-md-5">
                  <label>
                    First name
                  </label>
                  <input class="form-control" type="text" placeholder="First name" name="email" required>
                </div>
                <div class="col-md-5">
                  <label>
                    Last name
                  </label>
                  <input class="form-control" type="text" placeholder="Last name" name="email" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-envelope-open"></span>
                  </label>
                </div>
                <div class="col-md-10">
                  <label>
                    Email
                  </label>
                  <input class="form-control" type="email" placeholder="example@email.com" name="email" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-lock"></span>
                  </label>
                </div>
                <div class="col-md-10">
                  <label>
                    password
                  </label>
                  <input type="password" class="form-control" placeholder="*******" name="Password" id="password1" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-lock"></span>
                  </label>
                </div>
                <div class="col-md-10">
                  <label>
                    confirm password
                  </label>
                  <input type="password" class="form-control" placeholder="*******" name="Password" id="password2" required>
                </div>
              </div>
            </div>
            <div class="row mt-lg-5 mt-3">
              <div class="offset-2"></div>
              <div class="col-md-10">
                <button type="submit" class="btn btn-agile btn-block w-100">register</button>
              </div>
            </div>
          </form>
        </div>

      </div>

    </div>

  </div>
</div>













<div class="agileits-services py-5" id="services">
  <div class="container py-sm-5">
    <div class="title-wthree text-center">
      <h3 class="agile-title   text-white">
        our services
      </h3>

    </div>

        <div class="agileits-services-grids">



          <p>Any structured government, organization or entity require a form of procedure and order; a set
          of rules that maintain the flow of any official session of the entity. A commonly used Rules of
          Order are Robert’s Rules of Order and Modern Rules of Order; some other entities will create
          their own procedures and rules. Any Rules of Order allow the formal meetings of any entity to
          run smoothly, maintain fairness and maintain the flow of their meetings.
          Typically, procedures are used to maintain the flow of a committee or meeting of an
          entity. In a meeting, there are two main actors, the chair, the person maintaining the order of the
          session and overseeing its flow, and the participants. At times, the chair does mistakes, forgets
          the proper order or becomes biased. The goal of AI’s Rules of Order (AiRoO) is to substitute the
          role of the chair. AIRoO will be a web app that allows the chair to build all the possible rules
          using structured blocks, then allow the chair to have AiRoO maintain the order and the flow of a
          meeting using those rules designed into blocks earlier by the chair. AiRoO will consist of a back-
          end where the chair can manipulate those blocks and rules. AIRoO will also allow participants of
          that meeting to be authenticated and confirmed by the chair.
          Once in a meeting and the meeting begins, AiRoO will takeover the meeting using the
          rules it was given by the chair to maintain the flow and order. It will maintain the flow of the
          meeting by saying things the chair would have said and waiting for verbal responses or typed
          responses from the participants via the web-app. AiROo will utilize IBM’s Watson to allow for
          Speech-to-Text and Text-To-Speech processing. It is also possible AIRoO might utilize
          Watson’s language processing capability to improve its understanding of some terminology and
          allow for error correcting when the participants do such errors. The goal is that when AIRoO is
          running that there should be no need for the chair to exist as AIRoO already knows all the
          possible rules and can make sure they are followed properly when voting, taking roll call or even
          just debating or discussing any matter.</p>
        </div>


      </div>
    </div>
  









<section class="wthree-row py-lg-5" id="process">
  <div class="container py-5">
    <div class="title-wthree text-center py-lg-5">
      <h3 class="agile-title">
        How's Work
      </h3>
      <span></span>
    </div>
    <div class="row abbot-main py-lg-5 py-4 mb-sm-5">
      <div class="col-lg-4 abbot-right">
        <img src="images/p1.png" class="img-fluid rounded-circle" alt="" />
      </div>
      <div class="offset-lg-2"></div>
      <div class="col-lg-6 about-text-grid position-relative mt-lg-0 mt-5">
        <div class="d-flex">
          <span class="process-circle"></span>
          <h4 class="sec-title1">Step 1 ?</h4>
        </div>
        <p class="mt-md-5 mb-3 mt-3">.................... </p>
        <p>.............................................. </p>
        <div class="process-direction"></div>
      </div>
    </div>
    <div class="row abbot-main py-lg-5 py-4 my-md-5">
      <div class="col-lg-6 about-text-grid">
        <div class="d-flex">
          <h4 class="sec-title1 flow-odd">Step 2</h4>
          <span class="process-circle"></span>
        </div>
        <ul class="list-group mt-md-3 my-3">
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3 mt-lg-0 mt-3"></i>.............</li>
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............</li>
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............</li>
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............</li>
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............</li>
        </ul>
      </div>
      <div class="col-lg-4 abbot-right">
        <img src="images/p2.png" class="img-fluid rounded-circle" alt="" />
      </div>
    </div>
    <div class="row abbot-main py-lg-5 py-4 mb-sm-5">
      <div class="col-lg-4 abbot-right">
        <img src="images/p3.png" class="img-fluid rounded-circle" alt="" />
      </div>
      <div class="offset-lg-2"></div>
      <div class="col-lg-6 about-text-grid position-relative  mt-lg-0 mt-5">
        <div class="d-flex">
          <span class="process-circle"></span>
          <h4 class="sec-title1">Step 3</h4>
        </div>
        <p class="mt-md-5 mb-3 mt-3">............. </p>
        <p>................... </p>
        <div class="process-direction2"></div>
      </div>
    </div>
  </div>
</section>













<div class="agileits-partners py-sm-5 py-4" id="partners">
  <div class="container py-lg-5">
    <div class="title-wthree text-center">
      <h3 class="agile-title">
        our Team
      </h3>
      <span></span>
    </div>

    <!-- about bottom -->
    <div class="blogls py-5 bg-light border-bottom" id="what">
      <div class="container py-xl-5 py-lg-3">
        <p class="title-para text-center mx-auto mb-sm-5 mb-4">we ...................................
        ........................</p>
        <div class="row package-grids">
          <div class="col-md-4 blog">
            <div class="blogs-top">
              <img src="images/a1.jpg" alt="" class="img-fluid" />
            </div>
            <div class="blogs-bottom p-4 bg-white">
              <h3 class="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">1</h3>
              <p class="title-para text-center mx-auto mb-sm-5 mb-4">.......................</p>
            </div>
          </div>
          <div class="col-md-4 blog my-md-0 my-5">
            <div class="blogs-top">
              <img src="images/a2.jpg" alt="" class="img-fluid" />
            </div>
            <div class="blogs-bottom p-4 bg-white">
              <h3 class="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">2</h3>
              <p class="title-para text-center mx-auto mb-sm-5 mb-4">........................</p>
            </div>
          </div>
          <div class="col-md-4 blog">
            <div class="blogs-top">
              <img src="images/a3.jpg" alt="" class="img-fluid" />
            </div>
            <div class="blogs-bottom p-4 bg-white">
              <h3 class="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">3</h3>
              <p class="title-para text-center mx-auto mb-sm-5 mb-4">.................</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //about bottom -->
  </div>
</div>













<div class="contact-wthree" id="contact">
  <div class="container py-sm-5">
    <div class="row py-lg-5 py-4">
      <div class="col-lg-4">
        <div class="title-wthree">
          <h3 class="agile-title">
            contact
          </h3>
          <span></span>
        </div>
        <p>Just send us your questions and we will give you the help you need. </p>
        <div class="d-sm-flex">
          <a class="btn btn-primary mt-lg-5 mt-3 agile-link-cnt scroll" href="#contact" role="button">email us</a>
          <a class="btn btn-primary mt-lg-5 mt-3 ml-4 agile-link-cnt bg-dark scroll" href="#footer">call us</a>
        </div>
      </div>
      <div class="offset-2"></div>
      <div class="col-lg-6 mt-lg-0 mt-5">

        <div class="register-top1">
          <form action="#" method="get" class="register-wthree">
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-user"></span>
                  </label>
                </div>
                <div class="col-md-5">
                  <label>
                    First name
                  </label>
                  <input class="form-control" type="text" placeholder="First name" name="email" required>
                </div>
                <div class="col-md-5">
                  <label>
                    Last name
                  </label>
                  <input class="form-control" type="text" placeholder="Last name" name="email" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="fas fa-envelope-open"></span>
                  </label>
                </div>
                <div class="col-md-10">
                  <label>
                    Email
                  </label>
                  <input class="form-control" type="email" placeholder="example@email.com" name="email" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                  <label class="mb-0">
                    <span class="far fa-edit"></span>
                  </label>
                </div>
                <div class="col-md-10">
                  <label>
                    Your message
                  </label>
                  <textarea placeholder="Type your message here" class="form-control"></textarea>
                </div>
              </div>
            </div>
            <div class="row mt-lg-5 mt-3">
              <div class="offset-2"></div>
              <div class="col-md-10">
                <button type="submit" class="btn btn-agile btn-block w-100">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>








<footer id="footer" class="text-sm-left text-center">
  <div class="container py-4 py-sm-5">
    <h2>
      <a class="navbar-brand text-white" href="index.html">
        <i class="fab fa-laravel"></i> AIRoO
      </a>
    </h2>
    <div class="row py-sm-5 py-3">
      <div class="col-lg-2 col-md-4 col-sm-6">
        <ul class="list-agileits">
          <li>
            <a href="index.html" class="nav-link">
              Home
            </a>
          </li>
          <li class="my-2">
            <a href="#register" class="nav-link scroll">
              Register
            </a>
          </li>


          <li>
            <a href="#contact" class="nav-link scroll">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 mt-sm-5">
        <ul class="list-agileits">



        </ul>
      </div>
      <div class="offset-lg-5"></div>
      <div class="col-lg-3 col-md-4 footer-end-grid mt-md-0 mt-sm-5">
        <div class="fv3-contact">
          <span class="fas fa-phone mr-2"></span>
          <p class="d-inline">
            111 22 3333
          </p>
        </div>
        <div class="fv3-contact">
          <span class="fas fa-mobile mr-2"></span>
          <p class="d-inline">
            111 22 3333
          </p>
        </div>
        <div class="fv3-contact">
          <span class="fas fa-envelope-open mr-2"></span>
          <p class="d-inline">
            <a href="mailto:example@email.com">info@airoo.com</a>
          </p>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between pt-lg-5   footer-bottom-cpy">
      <div class="cpy-right text-center">
        <p>© 2020 AIRoo. All rights reserved
        </p>
      </div>
      <div class="social-icons pb-md-0 pb-4">
        <ul class="social-iconsv2 agileinfo text-center">
          <li class="ml-lg-5">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>









<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="#" method="post">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Username</label>
            <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-name" required>
          </div>
          <div class="form-group">
            <label for="password" class="col-form-label">Password</label>
            <input type="password" class="form-control" placeholder=" " name="Password" id="password" required>
          </div>
          <div class="right-l">
            <input type="submit" class="form-control" value="Login">
          </div>
          <div class="row sub-l my-3">
            <div class="col sub-agile">
              <input type="checkbox" id="brand1" value="">
              <label for="brand1" class="text-secondary">
                <span></span>Remember me?</label>
            </div>
            <div class="col forgot-l text-right">
              <a href="#" class="text-secondary">Forgot Password?</a>
            </div>
          </div>
          <p class="text-center dont-do">Don't have an account?
            <a href="#register" class="scroll text-dark font-weight-bold">
              Register Now</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

<script src="js/jquery-2.2.3.min.js"></script>



<script>
  window.onload = function () {
    document.getElementById("password1").onchange = validatePassword;
    document.getElementById("password2").onchange = validatePassword;
  }

  function validatePassword() {
    var pass2 = document.getElementById("password2").value;
    var pass1 = document.getElementById("password1").value;
    if (pass1 != pass2)
      document.getElementById("password2").setCustomValidity("Passwords Don't Match");
    else
      document.getElementById("password2").setCustomValidity('');

  }
</script>





<script>
  jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();

      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
    });
  });
</script>

<script>
  $(document).ready(function () {

    $().UItoTop({
      easingType: 'easeOutQuart'
    });

  });
</script>

<script src="js/bootstrap.js"></script>
<script src="js/move-top.js"></script>
<script src="js/easing.js"></script>




</body>

</html>