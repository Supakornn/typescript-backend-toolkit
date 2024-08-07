import express from 'express';
import apartmentBookingRouter, {
  APARTMENT_BOOKING_ROUTER_ROOT,
} from '../apartment/apartment-booking/apartment-booking.router';
import apartmentRouter, {
  APARTMENT_ROUTER_ROOT,
} from '../apartment/apartment.router';
import bookingTypeRouter, {
  BOOKING_TYPE_ROUTER_ROOT,
} from '../apartment/booking-type/bookingType.router';
import cancellationPolicyRouter, {
  CANCELLATION_POLICY_ROUTER_ROOT,
} from '../apartment/cancellation-policy/cancellation-policy.router';
import discountRouter, {
  DISCOUNT_ROUTER_ROOT,
} from '../apartment/discount/discount.router';
import facilityRouter, {
  FACILITY_ROUTER_ROOT,
} from '../apartment/facility/facility.router';
import houseRuleRouter, {
  HOUSE_RULE_ROUTER_ROOT,
} from '../apartment/house-rule/house-rule.router';
import propertyTypeRouter, {
  PROPERTY_TYPE_ROUTER_ROOT,
} from '../apartment/property-type/property-type.router';
import typeOfPlaceRouter, {
  TYPE_OF_PLACE_ROUTER_ROOT,
} from '../apartment/type-of-place/type-of-place.router';
import authRouter, { AUTH_ROUTER_ROOT } from '../auth/auth.routes';
import businessRouter, {
  BUSINESS_ROUTER_ROOT,
} from '../business/business.router';
import carBookingRouter, {
  CAR_BOOKING_ROUTER_ROOT,
} from '../car/car-booking/car-booking.routes';
import carRouter, {
  CAR_ROUTER_ROOT,
} from '../car/car-listing/car-listing.router';
import chauffeurRouter, {
  CHAUFFEUR_ROUTER_ROOT,
} from '../chauffeur/chauffeur.routes';
import healthCheckRouter, {
  HEALTH_ROUTER_ROOT,
} from '../healthcheck/healthcheck.routes';
import notificationRouter, {
  NOTIFICATION_ROUTER_ROOT,
} from '../notification/notification.router';
import reviewRouter, { REVIEW_ROUTER_ROOT } from '../review/review.router';
import setupRouter, { SETUP_ROUTER_ROOT } from '../setup/setup.router';
import uploadRouter, { UPLOAD_ROUTER_ROOT } from '../upload/upload.router';
import userRouter, { USER_ROUTER_ROOT } from '../user/user.router';
import mockRouter from '../mock/seed.route';

const router = express.Router();

router.use(HEALTH_ROUTER_ROOT, healthCheckRouter);
router.use(USER_ROUTER_ROOT, userRouter);
router.use(AUTH_ROUTER_ROOT, authRouter);
router.use(BUSINESS_ROUTER_ROOT, businessRouter);
router.use(UPLOAD_ROUTER_ROOT, uploadRouter);
router.use(SETUP_ROUTER_ROOT, setupRouter);
router.use(APARTMENT_ROUTER_ROOT, apartmentRouter);
router.use(BOOKING_TYPE_ROUTER_ROOT, bookingTypeRouter);
router.use(CANCELLATION_POLICY_ROUTER_ROOT, cancellationPolicyRouter);
router.use(FACILITY_ROUTER_ROOT, facilityRouter);
router.use(HOUSE_RULE_ROUTER_ROOT, houseRuleRouter);
router.use(DISCOUNT_ROUTER_ROOT, discountRouter);
router.use(PROPERTY_TYPE_ROUTER_ROOT, propertyTypeRouter);
router.use(TYPE_OF_PLACE_ROUTER_ROOT, typeOfPlaceRouter);
router.use(APARTMENT_BOOKING_ROUTER_ROOT, apartmentBookingRouter);
router.use(CAR_ROUTER_ROOT, carRouter);
router.use(REVIEW_ROUTER_ROOT, reviewRouter);
router.use(CAR_BOOKING_ROUTER_ROOT, carBookingRouter);
router.use(NOTIFICATION_ROUTER_ROOT, notificationRouter);
router.use(CHAUFFEUR_ROUTER_ROOT, chauffeurRouter);
router.use(mockRouter);

export default router;
