Table event {
    id int [pk, increment]
    user_id int
    event_date datetime 
    created_at datetime
    deleted_at datetime
    updated_at datetime
    title varchar
    description varchar
    color varchar
}

Table diary {
    id int [pk, increment]
    user_id int
    diary_date datetime 
    created_at datetime
    deleted_at datetime
    updated_at datetime
    title varchar
    description varchar
}

Table goal_category {
    id int [pk, increment]
    user_id int
    goal_date datetime
    created_at datetime
    deleted_at datetime
    updated_at datetime
    title varchar
    order int
}

Table goal_check {
    id int [pk, increment]
    user_id int
    goal_category_id int
    created_at datetime
    deleted_at datetime
    updated_at datetime
    status int    
}

Ref: goal_category.id >  goal_check.goal_category_id

Table memo {
    id int [pk, increment]
    user_id int
    memo_date datetime
    created_at datetime
    deleted_at datetime
    updated_at datetime
    title varchar
    order int
}
