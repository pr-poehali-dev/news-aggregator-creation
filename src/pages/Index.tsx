import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Category = 'Все' | 'Новости' | 'Обзоры' | 'Инструкции' | 'Полезное' | 'Страхование';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: Category;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Революция в технологиях: новый прорыв в искусственном интеллекте',
    excerpt: 'Исследователи представили новую модель ИИ, способную решать сложные задачи с беспрецедентной точностью',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/c5e2b861-261d-4e63-a21a-9fd6a19c787b.jpg',
    category: 'Новости',
    date: '15 ноября 2025',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Финансовые рынки 2025: что нужно знать инвесторам',
    excerpt: 'Аналитики делятся прогнозами и стратегиями для успешного инвестирования в новом экономическом цикле',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/db79b2cb-25d1-4511-95af-081eefc10cc6.jpg',
    category: 'Обзоры',
    date: '14 ноября 2025',
    readTime: '8 мин'
  },
  {
    id: 3,
    title: 'Полное руководство по настройке домашнего офиса',
    excerpt: 'Практические советы по организации эффективного рабочего пространства для удаленной работы',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/e8523414-d1ab-45e6-95db-ed7ffea4bc60.jpg',
    category: 'Инструкции',
    date: '13 ноября 2025',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: '10 привычек успешных предпринимателей',
    excerpt: 'Узнайте, какие ежедневные практики помогают лидерам бизнеса достигать выдающихся результатов',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/c5e2b861-261d-4e63-a21a-9fd6a19c787b.jpg',
    category: 'Полезное',
    date: '12 ноября 2025',
    readTime: '4 мин'
  },
  {
    id: 5,
    title: 'Страхование имущества: как выбрать правильный полис',
    excerpt: 'Эксперты объясняют ключевые моменты, на которые стоит обратить внимание при выборе страховки',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/db79b2cb-25d1-4511-95af-081eefc10cc6.jpg',
    category: 'Страхование',
    date: '11 ноября 2025',
    readTime: '7 мин'
  },
  {
    id: 6,
    title: 'Квантовые компьютеры приближаются к коммерческому применению',
    excerpt: 'Новое поколение квантовых процессоров открывает путь к практическому использованию технологии',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/e8523414-d1ab-45e6-95db-ed7ffea4bc60.jpg',
    category: 'Новости',
    date: '10 ноября 2025',
    readTime: '6 мин'
  },
  {
    id: 7,
    title: 'Сравнение популярных CRM-систем для малого бизнеса',
    excerpt: 'Детальный обзор возможностей, цен и преимуществ ведущих платформ управления клиентами',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/c5e2b861-261d-4e63-a21a-9fd6a19c787b.jpg',
    category: 'Обзоры',
    date: '9 ноября 2025',
    readTime: '10 мин'
  },
  {
    id: 8,
    title: 'Как защитить данные компании от киберугроз',
    excerpt: 'Пошаговое руководство по созданию надежной системы информационной безопасности',
    image: 'https://cdn.poehali.dev/projects/8b77f547-4be0-4607-ad25-d5c83a2f56bb/files/db79b2cb-25d1-4511-95af-081eefc10cc6.jpg',
    category: 'Инструкции',
    date: '8 ноября 2025',
    readTime: '9 мин'
  }
];

const categories: Category[] = ['Все', 'Новости', 'Обзоры', 'Инструкции', 'Полезное', 'Страхование'];

const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'Новости':
      return 'bg-primary text-primary-foreground';
    case 'Обзоры':
      return 'bg-accent text-accent-foreground';
    case 'Инструкции':
      return 'bg-secondary text-secondary-foreground';
    case 'Полезное':
      return 'bg-green-500 text-white';
    case 'Страхование':
      return 'bg-purple-600 text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Все');

  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Newspaper" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Новостной Портал
              </h1>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="Search" size={18} />
              Поиск
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary via-accent to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Главное сегодня
            </Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {articles[0].excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                {articles[0].date}
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                {articles[0].readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[73px] z-40 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Newspaper" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Новостной Портал</h3>
              </div>
              <p className="text-gray-400">
                Актуальные новости и аналитика каждый день
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                {categories.slice(1).map((category) => (
                  <li key={category} className="hover:text-white cursor-pointer transition-colors">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Редакция</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-white cursor-pointer transition-colors">Реклама</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Подписка</h4>
              <p className="text-gray-400 mb-4">Получайте лучшие статьи на почту</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 flex-1 focus:outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 Новостной Портал. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
