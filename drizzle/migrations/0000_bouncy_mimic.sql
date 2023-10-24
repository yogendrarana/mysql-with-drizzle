CREATE TABLE `post` (
	`id` int AUTO_INCREMENT NOT NULL,
	`caption` text NOT NULL,
	`author_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('admin','user') NOT NULL DEFAULT 'user',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_author_id_user_id_fk` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;