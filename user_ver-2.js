document.addEventListener("DOMContentLoaded", () => {
    const personalLogin = document.getElementById("personalLogin");
    const chooseAccount = document.getElementById("chooseAccount");
    const chooseAccountLOut = document.getElementById("chooseAccountLOut");
    const msmeLogin = document.getElementById("msmeLogin");
    const goLogin = document.getElementById("goLogin");
    const MSMEgoLogin = document.getElementById("MSMEgoLogin");
    const registrationFormPersonal = document.getElementById("registrationFormPersonal");
    const loginForm = document.getElementById("loginForm");
    //const logoutForm = document.getElementById("logoutForm");

    const magazineDiv = document.getElementById("magazine");
    //const MsmeShopDiv = document.getElementById("msmeShop");
    const magazineButton = document.getElementById("showMagazine");
    const profileDiv = document.getElementById("profile");
    const centralButton =document.getElementById("showCentral");
    const centralDiv = document.getElementById("central");
    const morobeButton =document.getElementById("showMorobe");
    const morobeDiv = document.getElementById("morobe");
    const gulfButton =document.getElementById("showGulf");
    const gulfDiv = document.getElementById("gulf");
    const logoutDiv = document.getElementById("logout");
    const logoutButton = document.getElementById("showLogout");
   

    //These are the LOGIN and REGISTRATION Functions
    // Toggle Registration and Login Forms
    chooseAccount.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("login").style.display = "none";
    document.getElementById("personal").style.display = "block";
    });

        chooseAccountLOut.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("logout").style.display = "none";
        document.getElementById("login").style.display = "block";
        });
    
    personalLogin.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("account").style.display = "none";
    document.getElementById("personal").style.display = "block";
    });

    msmeLogin.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("account").style.display = "none";
    document.getElementById("msme").style.display = "block";
    });

    goLogin.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("personal").style.display = "none";
    document.getElementById("login").style.display = "block";
    });

    MSMEgoLogin.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("msme").style.display = "none";
    document.getElementById("login").style.display = "block";
    });


// Handle Registration for Personal Accounts
registrationFormPersonal.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const position = document.getElementById("position").value;
    const profilePicture = document.getElementById("profilePicture").files[0];
    const coverPhoto = document.getElementById("coverPhoto").files[0];


    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

        const user = {
            username,
            password,
            firstName,
            lastName,
            position,
            profilePicture: URL.createObjectURL(profilePicture),
            coverPhoto: URL.createObjectURL(coverPhoto)
           
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert("User registered successfully!");
        document.getElementById("personal").style.display = "none";
        document.getElementById("login").style.display = "block";

});

    // Handle Login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const userData = localStorage.getItem(username);
        if (userData) {
            const user = JSON.parse(userData);
            if (user.password === password) {
                displayProfile(user);
            } else {
                alert("Invalid USERNAME or password!");
            }
        } else {
            alert("Invalid username or PASSWORD!");
        }
    });
// Handle Login
    logoutForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const userData = localStorage.getItem(username);
        if (userData) {
            const user = JSON.parse(userData);
            if (user.password === password) {
                displayProfile(user);
            } else {
                alert("Invalid USERNAME or password!");
            }
        } else {
            alert("Invalid username or PASSWORD!");
        }

    });

// The Profile login to MAGAZINE
    function displayProfile(user) {
        document.getElementById("profilePicDisplay").src = user.profilePicture;
        document.getElementById("userInfo").innerText = ` ${user.firstName} ${user.lastName}`;

        document.getElementById("profilePicProf").src = user.profilePicture;
        document.getElementById("covPhotoProf").src = user.coverPhoto;
        document.getElementById("userInfoProf").innerText = ` ${user.firstName} ${user.lastName}`;
        document.getElementById("userPositionProf").innerText = `${user.position}`;

        document.getElementById("proPicCent").src = user.profilePicture;
        document.getElementById("userInfoCent").innerText = ` ${user.firstName} ${user.lastName}`;

        document.getElementById("proPicGulf").src = user.profilePicture;
        document.getElementById("userInfoGulf").innerText = ` ${user.firstName} ${user.lastName}`;

        document.getElementById("proPicMoro").src = user.profilePicture;
        document.getElementById("userInfoMoro").innerText = ` ${user.firstName} ${user.lastName}`;

        document.getElementById("proPicOut").src = user.profilePicture;
        
        profileDiv.style.display = "block";
        document.getElementById("login").style.display = "none";     
        document.getElementById("logout").style.display = "none";           
        }

//When you click on the PROPIC in MAGAZINE it leads to PROFILE
profilePicDisplay.addEventListener("click", () => {
    magazineDiv.style.display = "none";
    document.getElementById("profile").style.display = "block";
    }); 
    
               // Profile to Magazine & Display Magazine        
                magazineButton.addEventListener("click", () => {
                profileDiv.style.display = "none";
               document.getElementById("magazine").style.display = "block";
               });

// Magazine to Central & Display Central        
centralButton.addEventListener("click", () => {
magazineDiv.style.display = "none";
document.getElementById("central").style.display = "block";
});

                // Central to Profile & Display Profile        
                proPicCent.addEventListener("click", () => {
                centralDiv.style.display = "none";
                document.getElementById("profile").style.display = "block";
                });

    //Magazine to Morobe & Display Morobe        
    morobeButton.addEventListener("click", () => {
    magazineDiv.style.display = "none";
    document.getElementById("morobe").style.display = "block";
    });

                // Morobe to Profile & Display Profile        
                proPicMoro.addEventListener("click", () => {
                morobeDiv.style.display = "none";
                document.getElementById("profile").style.display = "block";
                });

    //Magazine to Gulf & Display Gulf        
    gulfButton.addEventListener("click", () => {
    magazineDiv.style.display = "none";
    document.getElementById("gulf").style.display = "block";
    });

    // Gulf to Profile & Display Profile        
    proPicGulf.addEventListener("click", () => {
    gulfDiv.style.display = "none";
    document.getElementById("profile").style.display = "block";
    });

    // Handle Logout: Profile out Login Page
    logoutButton.addEventListener("click", () => {
    profileDiv.style.display = "none";
    document.getElementById("logout").style.display = "block";
    });
            
/*
    // Handle Registration for MSME Accounts
    registrationFormMSME.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const position = document.getElementById("position").value;
        const eshopLogo = document.getElementById("eshopLogo").files[0];
        const eshopCoverLogo = document.getElementById("eshopCoverLogo").files[0];

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const user = {
                username,
                password,
                shopName,
                firstName,
                lastName,
                position,
                eshopLogo: reader.result,// base64 image data
                eshopCoverLogo: reader.result // base64 image data
            };
            localStorage.setItem(username, JSON.stringify(user));
            alert("User registered successfully!");
            document.getElementById("msme").style.display = "none";
            document.getElementById("login").style.display = "block";
        };
        reader.readAsDataURL(eshopLogo),
        reader.readAsDataURL(eshopCoverLogo);
    });

    // The MSME login to MAGAZINE
    function displayMsme(user) {
        document.getElementById("eshopLogoProf").src = user.eshopLogo;
        document.getElementById("userinfoMsme").innerText = ` ${user.shopName} \n ${user.position}`;
        MsmeShopDiv.style.display = "block";
        document.getElementById("login").style.display = "none";            
        }*/
});


//This is the Drop Down List of All the Provinces
function toggleDropdown() {
    document.getElementById("showProvince").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
                }
            }
        }
    }


            //These are Controls for PUBLISHING a CONTENT in MAGAZINE
            document.getElementById('uploadForm').addEventListener('submit', function(event) {
                event.preventDefault();
    
                const fileInput = document.getElementById('fileInput');
                const captionInput = document.getElementById('captionInput');
                const mediaContainer = document.getElementById('mediaContainer');
    
                const file = fileInput.files[0];
                const caption = captionInput.value;
    
                if (file) {
                const mediaItem = document.createElement('div');
                mediaItem.classList.add('media-item');
    
                const mediaElement = document.createElement(file.type.startsWith('video') ? 'video' : 'img');
                mediaElement.src = URL.createObjectURL(file);
                if (file.type.startsWith('video')) {
                mediaElement.controls = true;
                }
    
                const captionElement = document.createElement('p');
                captionElement.textContent = caption;
    
                const actions = document.createElement('div');
                actions.classList.add('actions');
    
                const likeButton = document.createElement('button');
                likeButton.classList.add('like');
                likeButton.textContent = 'Like';
                likeButton.addEventListener('click', () => alert('Liked!'));
    
                const commentButton = document.createElement('button');
                commentButton.classList.add('comment');
                commentButton.textContent = 'Comment';
                commentButton.addEventListener('click', () => {
                const commentText = prompt('Write your comment:');
                if (commentText) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = commentText;
                mediaItem.querySelector('.comments').appendChild(commentElement);
                }
                });
    
            const shareButton = document.createElement('button');
            shareButton.classList.add('share');
            shareButton.textContent = 'Share';
            shareButton.addEventListener('click', () => alert('Shared!'));
    
            actions.appendChild(likeButton);
            actions.appendChild(commentButton);
            actions.appendChild(shareButton);
    
            mediaItem.appendChild(mediaElement);
            mediaItem.appendChild(captionElement);
            mediaItem.appendChild(actions);
    
            const commentsSection = document.createElement('div');
            commentsSection.classList.add('comments');
            mediaItem.appendChild(commentsSection);
    
            mediaContainer.prepend(mediaItem);
    
            fileInput.value = '';
            captionInput.value = '';
        }
    });

