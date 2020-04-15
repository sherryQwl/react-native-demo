/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One测试一下</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, World!</Text>
      </View>
    );
  }
}

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       url:
//         'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
//     };
//     return <Image source={pic} style={{widthP: 193, height: 110}} />;
//   }
// }

/**
 * props属性
 */
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop: 50}}>
//         <Text>Hello {this.props.name}</Text>
//       </View>
//     );
//   }
// }
// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name="Rose" />
//         <Greeting name="Jack" />
//         <Greeting name="Sinderela" />
//       </View>
//     );
//   }
// }

/**
 * state状态
 */
// class Blink extends Component {
//   // 声明state对象
//   state = {isShowingText: true};

//   // 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问
//   componentDidMount() {
//     // 每1000毫秒对showText状态做一次取返操作
//     setInterval(() => {
//       this.setState({
//         isShowingText: !this.state.isShowingText,
//       });
//     }, 1000);
//   }

//   render() {
//     // 根据当前showText的值来决定是痘显示text的内容
//     if (!this.state.isShowingText) {
//       return null;
//     }
//     return <Text>{this.props.text}</Text>;
//   }
// }
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text="我是第一行的文字，哈哈哈哈" />
//         <Blink text="我是第二行测试文字" />
//         <Blink text="看我看我看我这边这边" />
//       </View>
//     );
//   }
// }

/**
 * 样式
 */
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>red word</Text>
//         <Text style={styles.bigBlue}>bigBlue word</Text>
//         <Text style={[styles.red, styles.yellow]}>yellow word</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   red: {
//     color: 'red',
//   },
//   yellow: {
//     color: 'yellow',
//     fontSize: 33,
//   },
// });

/**
 * 指定宽高
 */
// export default class FixedDiensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{height: 300}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
