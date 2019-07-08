import {siteConfig} from "../../siteConfig";

export  const  TtcHelper = {

    imgUrl(img, path = null) {
        if (path) {
            return `${siteConfig.baseUrl}/img/${path}/${img}`;
        }
        return `${siteConfig.baseUrl}/img/${img}`;
    },
    ThumbImg(object_thumbnail,resize){
        return resize ? `https://sstaticcuoi-tuoitre.cdn.vccloud.vn/ttc/i/${resize}/${object_thumbnail}`
            : `https://sstaticcuoi-tuoitre.cdn.vccloud.vn/ttc/r/${object_thumbnail}`;
    },
    _html(content) {
        return { __html: content };
    },
    to_slug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    },

    getTermById(id) {
        let term = [];
        switch (id){
            case siteConfig.term.TTC_TERM_DOI_CUOI:
                term = {
                    name : 'Đời cười',
                    slug : 'doi-cuoi'
                };
                break;
            case siteConfig.term.TTC_TERM_GIAI_TRI:
                term  = {
                    name : 'Giải trí',
                    slug : 'giai-tri'
                };
                break;
            case siteConfig.term.TTC_TERM_SONG_TRE:
                term  = {
                    name : 'Sống trẻ',
                    slug : 'song-tre'
                };
                break;
            case siteConfig.term.TTC_TERM_THE_THAO:
                term  = {
                    name : 'Thể thao',
                    slug : 'the-thao'
                };
                break;
            case siteConfig.term.TTC_TERM_BIEM_HOA:
                term = {
                    name : 'Biếm hoạ',
                    slug : 'biem-hoa'
                };
                break;
            case siteConfig.term.TTC_TERM_VIDEO:
                term = {
                    name : 'Video',
                    slug : 'video'
                };
                break;
            default:
                term = {
                    name : 'Đời cười',
                    slug : 'doi-cuoi'
                };
                break;

        }
        return term;
    }
};

