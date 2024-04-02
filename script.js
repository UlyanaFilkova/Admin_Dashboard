var buttons = document.querySelectorAll('.article__btn-star');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('active');
    });
});

buttons = document.querySelectorAll('.article__btn-eye');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('active');
        var svg = button.querySelectorAll('svg');
        if (button.classList.contains('active')) {
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.65 22.44,13.26 22.08,13.85C21.5,13.5 20.86,13.25 20.18,13.12L20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12C4.83,15.36 8.24,17.5 12,17.5L13.21,17.43C13.07,17.93 13,18.46 13,19V19.46L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5Z" /></svg>';

        } else {
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>';
        }
    });
});


buttons = document.querySelectorAll('.article__btn-git');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            button.innerHTML = '<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M224 64C223.997 58.0156 222.316 52.152 219.148 47.075C215.979 41.9981 211.451 37.9112 206.077 35.2787C200.703 32.6461 194.698 31.5733 188.744 32.1822C182.791 32.791 177.128 35.057 172.398 38.7228C167.668 42.3887 164.06 47.3075 161.985 52.9207C159.91 58.5338 159.451 64.6163 160.659 70.4775C161.867 76.3386 164.695 81.7435 168.821 86.0782C172.947 90.413 178.206 93.5039 184 95V104C184 108.243 182.314 112.313 179.314 115.314C176.313 118.314 172.243 120 168 120H88C83.7565 120 79.6868 118.314 76.6862 115.314C73.6857 112.313 72 108.243 72 104V95C79.5412 93.0528 86.1135 88.4222 90.4848 81.9759C94.8561 75.5297 96.7263 67.7105 95.7449 59.984C94.7635 52.2575 90.9979 45.1541 85.1538 40.0054C79.3098 34.8567 71.7885 32.0161 64 32.0161C56.2114 32.0161 48.6901 34.8567 42.8461 40.0054C37.002 45.1541 33.2364 52.2575 32.255 59.984C31.2736 67.7105 33.1438 75.5297 37.5151 81.9759C41.8864 88.4222 48.4587 93.0528 56 95V104C56 112.487 59.3714 120.626 65.3725 126.627C71.3737 132.629 79.513 136 88 136H120V161C112.459 162.947 105.886 167.578 101.515 174.024C97.1438 180.47 95.2736 188.289 96.255 196.016C97.2364 203.743 101.002 210.846 106.846 215.995C112.69 221.143 120.211 223.984 128 223.984C135.789 223.984 143.31 221.143 149.154 215.995C154.998 210.846 158.764 203.743 159.745 196.016C160.726 188.289 158.856 180.47 154.485 174.024C150.113 167.578 143.541 162.947 136 161V136H168C176.487 136 184.626 132.629 190.627 126.627C196.629 120.626 200 112.487 200 104V95C206.867 93.2164 212.948 89.2057 217.291 83.596C221.634 77.9862 223.993 71.0944 224 64ZM144 192C144 195.165 143.062 198.258 141.303 200.889C139.545 203.52 137.047 205.571 134.123 206.782C131.199 207.993 127.982 208.31 124.879 207.693C121.775 207.075 118.924 205.551 116.686 203.314C114.449 201.076 112.925 198.225 112.307 195.121C111.69 192.018 112.007 188.801 113.218 185.877C114.429 182.953 116.48 180.455 119.111 178.696C121.742 176.938 124.835 176 128 176C132.243 176 136.313 177.686 139.314 180.686C142.314 183.687 144 187.757 144 192Z" fill="blue"/></svg>';

        } else {
            button.innerHTML = '<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M222 64C221.999 58.3238 220.387 52.7644 217.353 47.9675C214.318 43.1706 209.985 39.3331 204.856 36.9006C199.728 34.468 194.014 33.5404 188.38 34.2254C182.745 34.9103 177.42 37.1798 173.024 40.7702C168.628 44.3605 165.34 49.1245 163.543 54.5087C161.746 59.893 161.513 65.6765 162.872 71.1877C164.231 76.6988 167.125 81.7114 171.219 85.6432C175.313 89.575 180.438 92.2648 186 93.4V104C186 108.774 184.104 113.352 180.728 116.728C177.352 120.104 172.774 122 168 122H87.9999C83.226 122 78.6477 120.104 75.272 116.728C71.8964 113.352 69.9999 108.774 69.9999 104V93.4C77.2842 91.9131 83.7569 87.7745 88.1631 81.7865C92.5694 75.7985 94.5953 68.3877 93.848 60.9909C93.1008 53.594 89.6337 46.7382 84.1189 41.7524C78.604 36.7666 71.4344 34.0061 63.9999 34.0061C56.5655 34.0061 49.3958 36.7666 43.881 41.7524C38.3662 46.7382 34.8991 53.594 34.1519 60.9909C33.4046 68.3877 35.4305 75.7985 39.8368 81.7865C44.243 87.7745 50.7157 91.9131 57.9999 93.4V104C57.9999 111.956 61.1606 119.587 66.7867 125.213C72.4128 130.839 80.0434 134 87.9999 134H122V162.6C114.716 164.087 108.243 168.226 103.837 174.214C99.4305 180.202 97.4046 187.612 98.1519 195.009C98.8991 202.406 102.366 209.262 107.881 214.248C113.396 219.233 120.565 221.994 128 221.994C135.434 221.994 142.604 219.233 148.119 214.248C153.634 209.262 157.101 202.406 157.848 195.009C158.595 187.612 156.569 180.202 152.163 174.214C147.757 168.226 141.284 164.087 134 162.6V134H168C175.956 134 183.587 130.839 189.213 125.213C194.839 119.587 198 111.956 198 104V93.4C204.772 92.0081 210.857 88.3238 215.229 82.9682C219.6 77.6127 221.992 70.9134 222 64ZM45.9999 64C45.9999 60.4399 47.0556 56.9598 49.0335 53.9997C51.0114 51.0397 53.8226 48.7325 57.1116 47.3702C60.4007 46.0078 64.0199 45.6513 67.5116 46.3459C71.0032 47.0404 74.2105 48.7547 76.7279 51.2721C79.2452 53.7894 80.9595 56.9967 81.6541 60.4884C82.3486 63.98 81.9921 67.5992 80.6298 70.8883C79.2674 74.1774 76.9603 76.9886 74.0002 78.9665C71.0401 80.9443 67.56 82 63.9999 82C59.226 82 54.6477 80.1036 51.272 76.7279C47.8964 73.3523 45.9999 68.7739 45.9999 64ZM146 192C146 195.56 144.944 199.04 142.966 202C140.989 204.96 138.177 207.267 134.888 208.63C131.599 209.992 127.98 210.349 124.488 209.654C120.997 208.96 117.789 207.245 115.272 204.728C112.755 202.211 111.04 199.003 110.346 195.512C109.651 192.02 110.008 188.401 111.37 185.112C112.732 181.823 115.04 179.011 118 177.034C120.96 175.056 124.44 174 128 174C132.774 174 137.352 175.896 140.728 179.272C144.104 182.648 146 187.226 146 192ZM192 82C188.44 82 184.96 80.9443 182 78.9665C179.04 76.9886 176.732 74.1774 175.37 70.8883C174.008 67.5992 173.651 63.98 174.346 60.4884C175.04 56.9967 176.755 53.7894 179.272 51.2721C181.789 48.7547 184.997 47.0404 188.488 46.3459C191.98 45.6513 195.599 46.0078 198.888 47.3702C202.177 48.7325 204.989 51.0397 206.966 53.9997C208.944 56.9598 210 60.4399 210 64C210 68.7739 208.104 73.3523 204.728 76.7279C201.352 80.1036 196.774 82 192 82Z" fill="black"/></svg>';
        }
    });
});

var button = document.querySelector('.header__notifications');
button.addEventListener('click', function () {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.42901 2.41295C6.55508 2.26248 6.61714 2.06857 6.60184 1.87286C6.58655 1.67714 6.49514 1.49523 6.34722 1.36616C6.19931 1.2371 6.00668 1.17117 5.8107 1.18253C5.61472 1.1939 5.43101 1.28165 5.29901 1.42695L4.00701 2.90695C3.27439 3.74652 2.86024 4.81692 2.83701 5.93095L2.78001 8.64995C2.7759 8.84886 2.85097 9.04126 2.98872 9.18482C3.12646 9.32838 3.31559 9.41134 3.51451 9.41545C3.71342 9.41956 3.90582 9.34448 4.04938 9.20674C4.19294 9.06899 4.2759 8.87986 4.28001 8.68095L4.33601 5.96295C4.35205 5.20068 4.63558 4.46831 5.13701 3.89395L6.42901 2.41295Z" fill="#545454"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.23701 7.7C6.30417 6.63014 6.77653 5.62608 7.55793 4.89224C8.33934 4.15839 9.37104 3.74993 10.443 3.75H11V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8947 2.48043 13 2.73478 13 3V3.75H13.557C14.629 3.74993 15.6607 4.15839 16.4421 4.89224C17.2235 5.62608 17.6959 6.63014 17.763 7.7L17.984 11.234C18.0682 12.5815 18.5207 13.88 19.292 14.988C19.4514 15.2171 19.5488 15.4835 19.5747 15.7613C19.6006 16.0392 19.5542 16.319 19.4399 16.5736C19.3256 16.8281 19.1474 17.0488 18.9226 17.2142C18.6978 17.3795 18.4341 17.4838 18.157 17.517L14.75 17.925V19C14.75 19.7293 14.4603 20.4288 13.9446 20.9445C13.4288 21.4603 12.7294 21.75 12 21.75C11.2707 21.75 10.5712 21.4603 10.0555 20.9445C9.53974 20.4288 9.25001 19.7293 9.25001 19V17.925L5.84301 17.516C5.56611 17.4827 5.30252 17.3784 5.07786 17.2131C4.85319 17.0478 4.6751 16.8273 4.56086 16.5729C4.44663 16.3184 4.40015 16.0388 4.42593 15.7611C4.45172 15.4834 4.54889 15.2171 4.70801 14.988C5.47931 13.8799 5.93174 12.5814 6.01601 11.234L6.23701 7.7ZM10.75 19C10.75 19.3315 10.8817 19.6495 11.1161 19.8839C11.3505 20.1183 11.6685 20.25 12 20.25C12.3315 20.25 12.6495 20.1183 12.8839 19.8839C13.1183 19.6495 13.25 19.3315 13.25 19V18.25H10.75V19Z" fill="#545454"/><path d="M17.643 1.35495C17.4932 1.48573 17.4014 1.67065 17.3879 1.86905C17.3744 2.06745 17.4403 2.26309 17.571 2.41295L18.863 3.89295C19.3643 4.46772 19.6475 5.20046 19.663 5.96295L19.72 8.67996C19.722 8.77845 19.7434 8.87557 19.783 8.96579C19.8226 9.056 19.8795 9.13754 19.9506 9.20575C20.0217 9.27395 20.1055 9.32749 20.1973 9.3633C20.2891 9.39911 20.387 9.41649 20.4855 9.41446C20.584 9.41242 20.6811 9.391 20.7713 9.35143C20.8615 9.31186 20.9431 9.25491 21.0113 9.18383C21.0795 9.11274 21.133 9.02892 21.1688 8.93715C21.2046 8.84537 21.222 8.74745 21.22 8.64895L21.163 5.93095C21.1398 4.81693 20.7256 3.74652 19.993 2.90695L18.701 1.42695C18.5702 1.27714 18.3853 1.1854 18.1869 1.1719C17.9885 1.1584 17.7929 1.22424 17.643 1.35495Z" fill="#545454"/></svg>';

    } else {
        button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M6.42901 2.41295C6.55508 2.26248 6.61713 2.06857 6.60184 1.87286C6.58655 1.67714 6.49514 1.49523 6.34722 1.36616C6.19931 1.2371 6.00668 1.17117 5.8107 1.18253C5.61472 1.1939 5.43101 1.28165 5.29901 1.42695L4.00701 2.90695C3.27439 3.74652 2.86024 4.81692 2.83701 5.93095L2.78001 8.64995C2.77797 8.74844 2.79535 8.84637 2.83117 8.93814C2.86698 9.02991 2.92051 9.11374 2.98872 9.18482C3.05692 9.2559 3.13846 9.31285 3.22867 9.35243C3.31889 9.392 3.41601 9.41341 3.51451 9.41545C3.613 9.41748 3.71093 9.4001 3.8027 9.36429C3.89447 9.32848 3.97829 9.27494 4.04938 9.20674C4.12046 9.13853 4.17741 9.057 4.21698 8.96678C4.25656 8.87657 4.27797 8.77944 4.28001 8.68095L4.33601 5.96295C4.35205 5.20068 4.63558 4.46831 5.13701 3.89395L6.42901 2.41295Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.23701 7.7C6.30417 6.63014 6.77653 5.62608 7.55793 4.89224C8.33934 4.15839 9.37104 3.74993 10.443 3.75H11V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8947 2.48043 13 2.73478 13 3V3.75H13.557C14.629 3.74993 15.6607 4.15839 16.4421 4.89224C17.2235 5.62608 17.6959 6.63014 17.763 7.7L17.984 11.234C18.0682 12.5815 18.5207 13.88 19.292 14.988C19.4514 15.2171 19.5488 15.4835 19.5747 15.7613C19.6006 16.0392 19.5542 16.319 19.4399 16.5736C19.3256 16.8281 19.1474 17.0488 18.9226 17.2142C18.6978 17.3795 18.4341 17.4838 18.157 17.517L14.75 17.925V19C14.75 19.7293 14.4603 20.4288 13.9446 20.9445C13.4288 21.4603 12.7294 21.75 12 21.75C11.2707 21.75 10.5712 21.4603 10.0555 20.9445C9.53974 20.4288 9.25001 19.7293 9.25001 19V17.925L5.84301 17.516C5.56611 17.4827 5.30252 17.3784 5.07786 17.2131C4.85319 17.0478 4.6751 16.8273 4.56086 16.5729C4.44663 16.3184 4.40015 16.0388 4.42593 15.7611C4.45172 15.4834 4.54889 15.2171 4.70801 14.988C5.47931 13.8799 5.93174 12.5814 6.01601 11.234L6.23701 7.7ZM10.443 5.25C9.75258 5.24992 9.08808 5.51297 8.58479 5.98561C8.0815 6.45825 7.77726 7.10493 7.73401 7.794L7.51401 11.328C7.41235 12.949 6.86793 14.511 5.94001 15.844C5.92848 15.8606 5.92143 15.8798 5.91955 15.8999C5.91766 15.92 5.92101 15.9403 5.92927 15.9587C5.93752 15.9771 5.9504 15.9931 5.96665 16.005C5.9829 16.017 6.00197 16.0246 6.02201 16.027L9.75901 16.476C11.248 16.654 12.752 16.654 14.241 16.476L17.978 16.027C17.998 16.0246 18.0171 16.017 18.0334 16.005C18.0496 15.9931 18.0625 15.9771 18.0708 15.9587C18.079 15.9403 18.0824 15.92 18.0805 15.8999C18.0786 15.8798 18.0715 15.8606 18.06 15.844C17.1324 14.5109 16.5883 12.9489 16.487 11.328L16.266 7.794C16.2228 7.10493 15.9185 6.45825 15.4152 5.98561C14.9119 5.51297 14.2474 5.24992 13.557 5.25H10.443ZM12 20.25C11.31 20.25 10.75 19.69 10.75 19V18.25H13.25V19C13.25 19.69 12.69 20.25 12 20.25Z" fill="black"/><path d="M17.643 1.35495C17.4932 1.48573 17.4014 1.67065 17.3879 1.86905C17.3744 2.06745 17.4403 2.26309 17.571 2.41295L18.863 3.89295C19.3643 4.46772 19.6475 5.20046 19.663 5.96295L19.72 8.67996C19.7241 8.87887 19.8071 9.068 19.9506 9.20575C20.0942 9.34349 20.2866 9.41857 20.4855 9.41446C20.6844 9.41034 20.8735 9.32738 21.0113 9.18383C21.149 9.04027 21.2241 8.84787 21.22 8.64895L21.163 5.93095C21.1398 4.81693 20.7256 3.74652 19.993 2.90695L18.701 1.42695C18.5702 1.27714 18.3853 1.1854 18.1869 1.1719C17.9885 1.1584 17.7929 1.22424 17.643 1.35495Z" fill="black"/></svg>';

    }

});


var emptyLinks = document.querySelectorAll('a[href=""]');
emptyLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    });
});