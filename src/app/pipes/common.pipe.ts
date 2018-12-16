import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
@Pipe({
  name: 'FilterList'
})
export class FilterList implements PipeTransform {
  transform(array: any[], field: string, data:any): any {
    return array.filter(function(f){
      return f[field] == data;
    })
  }
}
@Pipe({
  name: 'subString'
})
export class SubString implements PipeTransform {
  transform(sSource: any, _length: number): any {
    if (sSource.indexOf(" ") >= 0) {

      if (sSource == "")
        return "";
      if (sSource.length <= _length)
        return sSource;

      var mSource = sSource;
      var nLength = _length;

      var m = mSource.Length;
      while (nLength > 0 && mSource[nLength] != " ") {
        nLength--;
      }
      mSource = mSource.substring(0, nLength);
      return mSource + "...";
    } else {
      return sSource.substring(0, _length) + "...";
    }
  }
}
@Pipe({
  name: 'slugUrl'
})
export class SlugUrl implements PipeTransform {
  transform(str: any): any {
    var title, slug;
    //Lấy text từ thẻ input title 
    title = str;

    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
  }
}


@Pipe({
  name: 'customSortArray'
})
export class CustomSortArrayPipe implements PipeTransform {
  transform(array: any[], field: string, _option: number): any[] {
    if (typeof array == 'undefined') {
      return;
    }
    let option = 1;
    if (typeof _option != 'undefined') {
      option = _option;
    }
    array.sort((a: any, b: any) => {
      if (option == 1) {//tăng dần
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      }

    });
    return array;
  }
}
@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTime implements PipeTransform {
  transform(date: any, option: any): any {
    if (typeof option == 'undefined')
        option = 1;
    var d = date;
    if (typeof date == 'undefined') {
        d = new Date(date);
    }

    if (typeof date == 'string') {
        date = date.replace(/\-/g, '\/').replace(/[T|Z]/g, ' ');
        if (date.indexOf('.') > 0)
            date = date.substring(0, date.indexOf('.'));
        d = new Date(date);
    }
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    var _hour = d.getHours();
    var _minute = d.getMinutes();
    var _second = d.getSeconds();
    if (curr_date < 10) curr_date = "0" + curr_date;
    if (curr_month < 10) curr_month = "0" + curr_month;
    if (_hour < 10) _hour = "0" + _hour;
    if (_minute < 10) _minute = "0" + _minute;
    if (_second < 10) _second = "0" + _second;

    if (option == 2) {//hh/mm/ss
        return _hour + ":" + _minute + ":" + _second;
    } else if (option == 1) {//dd/MM/yyyy
        return curr_date + "/" + curr_month + "/" + curr_year;
    } else if (option == 3) {//yyyy/MM/dd hh:mm:ss
        return curr_year + "/" + curr_month + "/" + curr_date + " " + _hour + ":" + _minute + ":" + _second;
    } if (option == 4) {//yyyy/MM/dd
        return curr_year + "/" + curr_month + "/" + curr_date;
    } else if (option == 5) {//yyyy/MM/dd
        return _hour + ":" + _minute;
    } else if (option == 6) {//yyyy/MM/dd
        return curr_date + "/" + curr_month ;
    } else {
        return curr_date + "/" + curr_month + "/" + curr_year + " " + _hour + ":" + _minute + ":" + _second;
    }
  }
}
