import React from 'react';
import { StyleSheet, Text, TextInput, Image,
          View, TouchableOpacity, ScrollView} from 'react-native';

export default class DetailPost extends React.Component {
  static navigationOptions = {
      title: 'Chi tiết bài viết',
  };

  constructor(props) {
    super(props);
    this.state = {
      post: {
          key: 1,
          title: 'Quốc Cơ - Quốc Nghiệp dừng chân top 5, anh chàng bị bệnh bại não đăng quang "Got Talent"',
          image: 'http://kenh14cdn.com/zoom/460_289/2018/6/4/photo1528060256269-1528060256270802889543.png',
          short_desc: 'Ngôi vị Quán quân "Britain\'s Got Talent 2018" đã tìm được chủ nhân.',
          content: `- Chương trình Đồng hành "Hành trình truyền cảm hứng" được phát sóng lúc 17h40 từ thứ 2 đến thứ 4 hàng tuần trên VTV1, với nội dung là các câu chuyện truyền cảm hứng được kể dưới định dạng phóng sự tài liệu kết hợp truyền hình thực tế. Tính chân thực, dung dị, hiện đại và tinh tế là tính chất đặc trưng của loạt chương trình đồng hành này.
                    - Chương trình "Hành trình truyền cảm hứng" phiên bản Wetalk được phát sóng vào 20h10-21h40 thứ 7 tuần thứ 3 hàng tháng trên kênh VTV1 sẽ là không gian gặp gỡ của những con người, những câu chuyện truyền cảm hứng nhất trên khắp đất nước, trong mọi lĩnh vực.
                    - Chương trình Gala trao giải "Hành trình truyền cảm hứng - WeChoice Awards" được tổ chức mỗi năm một lần vào dịp cuối năm, được truyền hình trực tiếp trên kênh VTV1. Đây là buổi lễ trao giải trang trọng tôn vinh những gương mặt truyền cảm hứng nhất tới xã hội trong suốt 1 năm.`
        }
    }
    
  }
  componentDidMount() {
     
  }

  render() {
      return (
        <View key={this.state.post.key} style={styles.postUnit}>
              <Image source={{uri: this.state.post.image}} style={{width: '100%', height: 200}}/>
            <Text style={styles.title}>{this.state.post.title}</Text>
            <Text>{this.state.post.short_desc}</Text>
            <Text>{this.state.post.content}</Text>
        </View>

          
      )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 8,
    paddingRight: 8,
  },
  postUnit: {
    marginTop: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5
  }
  
});
