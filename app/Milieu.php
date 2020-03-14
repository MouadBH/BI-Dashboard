<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Milieu extends Model
{
    /**
     * The connection associated with the model.
     *
     * @var string
     */
    protected $connection = 'mysql2';
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'milieu';
}
