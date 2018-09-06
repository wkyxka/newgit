
    window.onload = function () {
        // 购物车
        var cart = document.querySelector('header .container .cart');

        var box = document.querySelector('header .container .box');

        var cart_col = document.querySelector("header .container .cart .iconfont");


        cart.onmouseover = function () {
            cart.style.background = '#fff';
            cart_col.style.color = '#ff6700';
            box.style.display = 'block';
            box.style.height = '100px';

        }

        cart.onmouseout = function () {
            cart.style.background = '#424242';
            cart_col.style.color = '#b0b0b0';
            box.style.height = '0px';
        }
//导航轮播
        var Ull = document.querySelectorAll('header .bar ul li');
        var show_all = document.querySelectorAll('header .site_show ul');

        var show = document.querySelector('header .site_show');

        var len = Ull.length - 2;

        for (var i = 0; i < len; i++) {
            Ull[i].index = i;
            Ull[i].onmouseover = function () {
                show.style.height = '230px';
                for (var i = 0; i < len; i++) {
                    show_all[i].style.display = 'none';
                }
                show_all[this.index].style.display = 'block';
            }
            Ull[i].onmouseout = function () {
                show.style.height = '0px';
            }
        }
        ;

        //左边侧轮播
        var Bar = document.querySelectorAll('main .container .lef_bar li');
        var hidd = document.querySelectorAll('main .container .hid .inc');
        var All_hd = document.querySelector('main .hid');
        var length = Bar.length;

        for (var i = 0; i < length; i++) {
            Bar[i].index = i;
            Bar[i].onmouseover = function () {
                All_hd.style.width = 'auto';
                for (var i = 0; i < length; i++) {
                    hidd[i].style.display = 'none';
                }
                hidd[this.index].style.display = 'block';
            }
            Bar[i].onmouseout = function () {
                All_hd.style.width = '0px';
            }

        }
        //大轮播

        var bz_first = document.querySelector('main .ico .left');
        var by_first = document.querySelector('main .ico .right');
        var imag_first = document.querySelector('main .container');
        var lii_first = document.querySelectorAll('main .dot_one span');
        var b=0;
        var len_first = lii_first.length;
        var l = 0;
        for (var c=0;c<len_first;c++){
            lii_first[c].index = c;
            lii_first[c].onmouseover = function () {

                for (var j=0;j<len_first;j++){
                    lii_first[j].className = '';
                }
                lii_first[this.index].className = 'active';
                l = lii_first[this.index].index;
                acc();
            }

            function acc() {
                imag_first.style.background ='image/dalunbo/ + l + .jpg';
            }
        }
        by_first.onclick = function () {
            b++;
            if (b > 4)
            {
                --b;
            }
            lii_first[b].className = 'active';
            lii_first[b-1].classList.remove('active');
            imag_first.style.background ='image/dalunbo/ + d + .jpg';

            bz_first.onclick = function () {
                b--;
                if (b < 0)
                {
                    ++b;
                }
                lii_first[b].className = 'active';
                lii_first[b+1].classList.remove('active');
                imag_first.style.background ='image/dalunbo/ + d + .jpg';
            }
        }

        //家电--电视
        var jiad_span = document.querySelectorAll(' .partial .title_t .tit_rig span');
        var jiad_ul = document.querySelector('.partial .part_onrig ul');

        var jiad_two = document.querySelector('.partial .part_onrig .Ultwo');
        var i = 0;
        var leng = jiad_span.length;
        var w = 0;
        for (i; i < leng; i++) {
            jiad_span[i].index = i;
            jiad_span[i].onmouseover = function () {
                for (var k = 0; k < leng; k++) {
                    jiad_span[k].className = '';
                }
                jiad_span[this.index].className = 'active';
                w = jiad_span[this.index].index;
                ary();
            }
        }

        function ary() {
            jiad_ul.style.marginLeft = -992 * w + 'px';
            jiad_two.style.marginLeft = -992 * w + 'px';
        }

        //智能--米家
        var zhin_span = document.querySelectorAll('.partial_two .title_t .tit_rig span')
        var zhin_ul = document.querySelector('.partial_two .part_onrig ul')
        var zhin_two = document.querySelector('.partial_two .part_onrig .Ultwo')
        var y = 0;
        var i = 0;
        var leng_1 = zhin_span.length;
        for (i; i < leng_1; i++) {
            zhin_span[i].index = i;
            zhin_span[i].onmouseover = function () {
                for (var z = 0; z < leng_1; z++) {
                    zhin_span[z].className = '';
                }
                zhin_span[this.index].className = 'active';
                y = zhin_span[this.index].index;
                aru();
            }

            function aru() {
                zhin_ul.style.marginLeft = -992 * y + 'px';
                zhin_two.style.marginLeft = -992 * y + 'px';
            }

        }
        //搭配
        var dap_span = document.querySelectorAll('.partial_three .title_t .tit_rig span');
        var dap_ul = document.querySelector('.partial_three .part_onrig ul');
        var dap_two = document.querySelector('.partial_three .part_onrig .Ultwo');
        var u = 0;
        var i = 0;
        var leng_2 = dap_span.length;
        for (i; i < leng_2; i++) {
            dap_span[i].index = i;
            dap_span[i].onmouseover = function () {
                for (var z = 0; z < leng_2; z++) {
                    dap_span[z].className = '';
                }
                dap_span[this.index].className = 'active';
                u = dap_span[this.index].index;
                ari();
            }

            function ari() {
                dap_ul.style.marginLeft = -992 * u + 'px';
                dap_two.style.marginLeft = -992 * u + 'px';
            }

        }

        //配件
        var peij_span = document.querySelectorAll('.partial_four .title_t .tit_rig span')
        var peij_ul = document.querySelector('.partial_four .part_onrig ul')
        var peij_two = document.querySelector('.partial_four .part_onrig .Ultwo')

        var o = 0;
        var i = 0;
        var leng_3 = peij_span.length;
        for (i; i < leng_3; i++) {
            peij_span[i].index = i;
            peij_span[i].onmouseover = function () {
                for (var z = 0; z < leng_3; z++) {
                    peij_span[z].className = '';
                }
                peij_span[this.index].className = 'active';
                o = peij_span[this.index].index;
                aro();
            }

            function aro() {
                peij_ul.style.marginLeft = -992 * o + 'px';
                peij_two.style.marginLeft = -992 * o + 'px';
            }
        }


        // 周边
        var zhoub_span = document.querySelectorAll('.partial_five .title_t .tit_rig span');

        var zhoub_ul = document.querySelector('.partial_five .part_onrig ul');
        var zhoub_two = document.querySelector('.partial_five .part_onrig .Ultwo');
        var p = 0;
        var i = 0;
        var leng_4 = zhoub_span.length;
        for (i; i < leng_4; i++) {
            zhoub_span[i].index = i;
            zhoub_span[i].onmouseover = function () {
                for (var z = 0; z < leng_4; z++) {
                    zhoub_span[z].className = '';
                }
                zhoub_span[this.index].className = 'active';
                p = zhoub_span[this.index].index;
                arp();
            }

            function arp() {
                zhoub_ul.style.marginLeft = -992 * p + 'px';
                zhoub_two.style.marginLeft = -992 * p + 'px';
            }

        }
        //为你推荐
        var zuok = document.querySelector('.iflash_two .title_t .tit_rig_le');
        var youk = document.querySelector('.iflash_two .title_t .tit_rig_ri');
        var tuij_ul = document.querySelector('.iflash_two .xlun_three ul');
        var m = 0;

        zuok.onclick = function () {
            m++;
            if (m==4){
                --m;
            }
            tuij_ul.style.marginLeft = '-' + (1225*m) + 'px';

            youk.onclick = function () {
                m--;
                if (m== -1){
                    ++m;
                }
                tuij_ul.style.marginLeft = '-' + (1225*m) + 'px';
            }
        }

       // 内容
       // ---1---
       var bz = document.querySelector('.iflash_four .xlun_three .one .bk_z');
        var by = document.querySelector('.iflash_four .xlun_three .one .bk_y');
        var imag = document.querySelector('.iflash_four .xlun_three .one .type_book');
        var lii = document.querySelectorAll('.iflash_four .xlun_three .one .chuf li');
        var v=0;
        var len = lii.length;
        var l = 0;
        for (var c=0;c<len;c++){
            lii[c].index = c;
            lii[c].onmouseover = function () {

                for (var j=0;j<len;j++){
                    lii[j].className = '';
                }
                lii[this.index].className = 'active';
                l = lii[this.index].index;
                acc();
            }
            function acc() {
                imag.style.marginLeft = - 296*l + 'px';
            }
        }

        bz.onclick = function () {
          v++;
          if (v==3){
              --v;
          }
          lii[v].className = 'active';
          lii[v-1].classList.remove('active');
          imag.style.marginLeft = '-' + (296*v) + 'px';
          by.onclick = function () {
              v--;
              if (v== -1){
                  ++v;
              }
              lii[v].className = 'active';
              lii[v+1].classList.remove('active');
              imag.style.marginLeft = '-' + (296*v) + 'px';
          }
        }

       //---2---

        var bz_two = document.querySelector('.iflash_four .xlun_three .two .bk_z');
        var by_two = document.querySelector('.iflash_four .xlun_three .two .bk_y');
        var imag_two = document.querySelector('.iflash_four .xlun_three .two .type_book');
        var lii_two = document.querySelectorAll('.iflash_four .xlun_three .two .chuf li');
        var b=0;
        var leng = lii_two.length;
        var l = 0;
        for (var c=0;c<leng;c++){
            lii_two[c].index = c;
            lii_two[c].onmouseover = function () {

                for (var j=0;j<leng;j++){
                    lii_two[j].className = '';
                }
                lii_two[this.index].className = 'active';
                l = lii_two[this.index].index;
                acc();
            }
            function acc() {
                imag_two.style.marginLeft = - 296*l + 'px';
            }
        }
        bz_two.onclick = function () {
            b++;
            if (b==4){
                --b;
            }
            lii_two[b].className = 'active';
            lii_two[b-1].classList.remove('active');
            imag_two.style.marginLeft = '-' + (296*b) + 'px';
            by_two.onclick = function () {
                b--;
                if (b== -1){
                    ++b;
                }
                lii_two[b].className = 'active';
                lii_two[b+1].classList.remove('active');
                imag_two.style.marginLeft = '-' + (296*b) + 'px';
            }
        }
       //---3---

        var bz_three = document.querySelector('.iflash_four .xlun_three .three .bk_z');
        var by_three = document.querySelector('.iflash_four .xlun_three .three .bk_y');
        var imag_three = document.querySelector('.iflash_four .xlun_three .three .type_book');
        var lii_three = document.querySelectorAll('.iflash_four .xlun_three .three .chuf li');
        var b=0;
        var leng = lii_three.length;
        var l = 0;
        for (var c=0;c<leng;c++){
            lii_three[c].index = c;
            lii_three[c].onmouseover = function () {

                for (var j=0;j<leng;j++){
                    lii_three[j].className = '';
                }
                lii_three[this.index].className = 'active';
                l = lii_three[this.index].index;
                acc();
            }
            function acc() {
                imag_three.style.marginLeft = - 296*l + 'px';
            }
        }
        bz_three.onclick = function () {
            b++;
            if (b==4){
                --b;
            }
            lii_three[b].className = 'active';
            lii_three[b-1].classList.remove('active');
            imag_three.style.marginLeft = '-' + (296*b) + 'px';
            by_three.onclick = function () {
                b--;
                if (b== -1){
                    ++b;
                }
                lii_three[b].className = 'active';
                lii_three[b+1].classList.remove('active');
                imag_three.style.marginLeft = '-' + (296*b) + 'px';
            }
        }

       //---4---
        var bz_four = document.querySelector('.iflash_four .xlun_three .four .bk_z');
        var by_four = document.querySelector('.iflash_four .xlun_three .four .bk_y');
        var imag_four = document.querySelector('.iflash_four .xlun_three .four .type_book');
        var lii_four = document.querySelectorAll('.iflash_four .xlun_three .four .chuf li');
        var b=0;
        var leng = lii_four.length;
        var l = 0;
        for (var c=0;c<leng;c++){
            lii_four[c].index = c;
            lii_four[c].onmouseover = function () {

                for (var j=0;j<leng;j++){
                    lii_four[j].className = '';
                }
                lii_four[this.index].className = 'active';
                l = lii_four[this.index].index;
                acc();
            }
            function acc() {
                imag_four.style.marginLeft = - 296*l + 'px';
            }
        }
        bz_four.onclick = function () {
            b++;
            if (b==4){
                --b;
            }
            lii_four[b].className = 'active';
            lii_four[b-1].classList.remove('active');
            imag_four.style.marginLeft = '-' + (296*b) + 'px';
            by_four.onclick = function () {
                b--;
                if (b== -1){
                    ++b;
                }
                lii_four[b].className = 'active';
                lii_four[b+1].classList.remove('active');
                imag_four.style.marginLeft = '-' + (296*b) + 'px';
            }
        }


    }






