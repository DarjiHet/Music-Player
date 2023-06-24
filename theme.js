        var tooggleswitch = document.getElementById('switch');
        var nav = document.getElementById('nav');
        var bottom = document.getElementById('bottom');
        var bodydark = document.getElementById('body');
        var bg = document.querySelector('.container');
        var songitemdark = document.getElementsByClassName('songitem');
        console.log(songitemdark);

        tooggleswitch.addEventListener('click', function(){
            tooggleswitch.classList.toggle('active');
            nav.classList.toggle('activenav');
            bottom.classList.toggle('activebottom');
            bodydark.classList.toggle('activebody');
            bg.classList.toggle('activecontainer');
            for(let i=0;i<10;i++)
            {
                songitemdark[i].classList.toggle('asong');
            }
        });


        //for open close

        var songba = document.getElementById('songbanner');
        var bott = document.getElementById('bottom');
        var con = document.getElementById('container');
        var clo = document.getElementById('close');

        bott.addEventListener('click', function(){
            songba.style.display = 'block';
            con.classList.add('closecontainer');
        });

        clo.addEventListener('click', function(){
            songba.style.display = 'none';
            con.classList.remove('closecontainer');
        });