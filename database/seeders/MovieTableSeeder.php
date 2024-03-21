<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movie = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
                'thumbnail' => 'https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Golden Age of Bruce Lee',
                'slug' => 'the-golden-age-of-bruce-lee',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
                'thumbnail' => 'https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg',
                'rating' => 5.0,
                'is_featured' => 0,
            ],
            [
                'name' => 'The awesome movie',
                'slug' => 'the-awesome-movie',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
                'thumbnail' => 'https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg',
                'rating' => 3.5,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movie);
    }
}
