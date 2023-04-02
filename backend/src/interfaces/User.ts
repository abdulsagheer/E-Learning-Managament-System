// Importing Libraries
import { Document } from 'mongoose';

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	picture?: string;
	role?: string[];
	stripe_account_id?: string;
	stripe_seller?: {};
	stripeSession?: {};
	createdAt?: Date;
	updatedAt?: Date;
}
