import NewsWidget from './components/NewsWidget/NewsWidget';
import './App.css';
import CurrencyWidget from './components/CurrencyWidget/CurrencyWidget';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BottomWidget from './components/BottomWidget/BottomWidget';
import BottomWidgetLinksList from './components/BottomWidget/BottomWidgetLinksList/BottomWidgetLinksList';
import BottomWidgetText from './components/BottomWidget/BottomWidgetText/BottomWidgetText';
import BottomWeatherWidget from './components/BottomWidget/BottomWidgetWeather/BottomWeatherWidget';

const NEWS = [
  {
    categoryName: "news",
    categoryItems: [
      {link: "#", title: "Министерство цифрового развития предложило собирать биометрические данные водителей такси и каршеринга"},
      {link: "#", title: "РЕН ТВ: Любовь Соболь покинула Россию вопреки судебному запрету", icon: "https://puu.sh/I2o05/ff614c661d.png"},
      {link: "#", title: "В Гидрометцентре предупредили о жаркой погоде в Москве до 12 августа", icon: "https://puu.sh/I2nZl/4080326ef5.png"}
    ]
  },
  {
    categoryName: "announcements",
    categoryItems: [
      {link: "#", title: "\"Мосприрода\" просит не собирать и не топтать грибы на особо охраняемых природных территориях Москвы", icon: "https://puu.sh/I2nY3/bce3526c5e.png"},
      {link: "#", title: "Сергунина: За шесть лет «Москвариум» на ВДНХ принял 10 млн посетителей", icon: "https://puu.sh/I2nYQ/302532a451.png"},
      {link: "#", title: "Столица вдвое увеличила экспорт офисной мебели и техники"}
    ]
  },
  {
    categoryName: "banana",
    categoryItems: [
      {link: "#", title: "В своем глазу бревна аркадий", icon: "https://puu.sh/I2o0V/7087d801f5.png"},
      {link: "#", title: "не замечал до той поры", icon: "https://puu.sh/I2o1m/c3a142eec2.png"},
      {link: "#", title: "пока лицо ему не искусали бобры", icon:"https://puu.sh/I2o2I/c55f30fdba.png"}
    ]
  }
]

const CURRENCY = [
  {currencyName: "USD", currencyValue: "150.99", currencyChange: "+10.0", currencyLink: "#"},
  {currencyName: "EUR", currencyValue: "1500", currencyChange: "-200", currencyLink: "#"},
  {currencyName: "Индекс кабачка", currencyValue: "11", currencyChange: "+6%", currencyLink: "#"},
]

const SEARCHLINKS = [
  {href: "#", title: "Наши" },{href: "#", title: "Поезда" },{href: "#", title: "Самые" },{href: "#", title: "Поездатые" },{href: "#", title: "Поезда" }
]

const LINKSLIST1 = [
  {href: "#", text: "Мне мой друг вчера принёс гидравлический насос", mainTitle: "Авто", icon: "https://puu.sh/I2ojC/7d091e5631.png"},
  {href: "#", text: "И сказал, что это ландыши", mainTitle: "Музыка", icon: "https://puu.sh/I2oiZ/90033435ac.png"},
  {href: "#", text: "Но меня не проведешь. Насос на ландыш не похож", mainTitle: "Работа", icon: "https://puu.sh/I2ojq/6e5d221154.png"}
]

const LINKSLIST2 = [
  {href: "#", text: "Первый исторический", time: "02:00", additionalText: "\"Сантехники. Месть падших.\" 2-я серия 17-го сезона."},
  {href: "#", text: "ХРЕН-ТВ", time: "03:00", additionalText: "Выращиваем огурцы в условиях крайнего севера"},
  {href: "#", text: "Россия-6", time: "04:00", additionalText: "Чемпионат Омска 2021 по семколузганию. Командный зачет. Финал."}
]

const BOTTOM_WIDGET_TEXT1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
const BOTTOM_WIDGET_WEATHER = {currentWeather: "15", futureWeather1: "16", futureWeather2: "17"}

function App() {
  return (
    <div className="App">
      <NewsWidget news={NEWS}/>
      <CurrencyWidget currencies={CURRENCY}/>
      <SearchPanel links={SEARCHLINKS}/>
      <div className="BlockWithWidgets">
      <BottomWidget 
          headerLink={{href:"#", title:"Weather"}} 
          content={<BottomWeatherWidget {...BOTTOM_WIDGET_WEATHER}/>}/>
        <BottomWidget 
          headerLink={{href:"#", title:"Widget1 with links"}} 
          content={<BottomWidgetLinksList links={LINKSLIST1}/>}/>        
        <BottomWidget 
          headerLink={{href:"#", title:"Widget with text"}} 
          content={<BottomWidgetText text={BOTTOM_WIDGET_TEXT1}/>}/>       
        <BottomWidget 
          headerLink={{href:"#", title:"Widget2 widh links"}} 
          content={<BottomWidgetLinksList links={LINKSLIST2}/>}/>
      </div>
    </div>
  );
}

export default App;
